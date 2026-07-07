import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from '../config.js';

let pool = null;
const __filename = fileURLToPath(import.meta.url);
const DB_DIR = path.dirname(__filename);
const schemaPath = path.join(DB_DIR, 'schema.sql');

async function getPool() {
  if (pool) return pool;
  const { Pool } = await import('pg');
  pool = new Pool({
    connectionString: config.databaseUrl,
    ssl: config.dbSsl ? { rejectUnauthorized: false } : false
  });
  return pool;
}

async function query(sql, params = []) {
  const db = await getPool();
  return db.query(sql, params);
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function rowDate(value) {
  if (!value) return new Date().toISOString();
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function createdAtOf(item) {
  return item.createdAt || item.created_at || new Date().toISOString();
}

function updatedAtOf(item) {
  return item.updatedAt || item.updated_at || new Date().toISOString();
}

function generateOrderNumber(order) {
  if (order.orderNumber || order.order_number) return order.orderNumber || order.order_number;
  const date = new Date(createdAtOf(order));
  const ymd = date.toISOString().slice(0, 10).replace(/-/g, '');
  const shortId = String(order.id || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
  return `ORD-${ymd}-${shortId || Date.now().toString().slice(-6)}`;
}

function normalizeOrderRow(row, itemRows = []) {
  const data = row.data || {};
  return {
    ...data,
    id: row.id,
    orderNumber: row.order_number || data.orderNumber || data.order_number || '',
    type: row.type,
    table: row.table_number || '',
    customerName: row.customer_name || '',
    customerPhone: row.customer_phone || '',
    userType: row.user_type || 'guest',
    pickupTime: row.pickup_time || '',
    items: itemRows.map(normalizeOrderItemRow),
    totalQuantity: Number(row.total_quantity || 0),
    subtotal: toNumber(row.subtotal),
    taxRate: toNumber(row.tax_rate),
    tax: toNumber(row.tax),
    cashTotal: toNumber(row.cash_total),
    cardServiceRate: toNumber(row.card_service_rate),
    cardTotal: toNumber(row.card_total),
    total: toNumber(row.total),
    status: row.status,
    paymentStatus: row.payment_status || 'unpaid',
    createdAt: rowDate(row.created_at),
    updatedAt: rowDate(row.updated_at)
  };
}

function normalizeOrderItemRow(row) {
  const data = row.data || {};
  return {
    ...data,
    id: row.dish_code || data.id || row.id,
    displayId: row.display_id || data.displayId || row.dish_code || '',
    name: row.name || '',
    name_en: row.name_en || '',
    price: toNumber(row.price),
    qty: Number(row.quantity || 0),
    subtotal: toNumber(row.subtotal),
    note: row.note || ''
  };
}

function normalizeReservationRow(row) {
  const data = row.data || {};
  return {
    ...data,
    id: row.id,
    name: row.name || '',
    phone: row.phone || '',
    date: row.reservation_date || '',
    time: row.reservation_time || '',
    guests: row.guests || '',
    note: row.note || '',
    replied: Boolean(row.replied),
    replyNote: row.reply_note || '',
    status: row.status || 'new',
    createdAt: rowDate(row.created_at),
    updatedAt: rowDate(row.updated_at)
  };
}

function normalizeServiceRequestRow(row) {
  const data = row.data || {};
  return {
    ...data,
    id: row.id,
    table: row.table_number || '',
    item: row.item || '',
    quantity: Number(row.quantity || 1),
    phone: row.phone || '',
    phoneDigits: row.phone_digits || '',
    name: row.name || '',
    status: row.status || 'new',
    createdAt: rowDate(row.created_at),
    updatedAt: rowDate(row.updated_at)
  };
}

async function syncMemberFromOrder(client, order) {
  if (!order.customerPhone) return;
  const memberId = String(order.customerPhone).replace(/\D/g, '') || order.customerPhone;
  if (!memberId) return;
  await client.query(
    `INSERT INTO members (id, phone, name, data, created_at, updated_at)
     VALUES ($1, $2, $3, $4::jsonb, $5, $6)
     ON CONFLICT (phone) DO UPDATE SET
       name = COALESCE(NULLIF(EXCLUDED.name, ''), members.name),
       updated_at = NOW()`,
    [memberId, order.customerPhone, order.customerName || '', JSON.stringify({ source: 'order' }), createdAtOf(order), updatedAtOf(order)]
  );
}

const orderStore = {
  async list() {
    const ordersResult = await query('SELECT * FROM orders ORDER BY created_at DESC');
    const orderIds = ordersResult.rows.map(row => row.id);
    let itemsByOrder = new Map();
    if (orderIds.length) {
      const itemsResult = await query(
        'SELECT * FROM order_items WHERE order_id = ANY($1::text[]) ORDER BY order_id, line_index ASC, created_at ASC',
        [orderIds]
      );
      for (const itemRow of itemsResult.rows) {
        if (!itemsByOrder.has(itemRow.order_id)) itemsByOrder.set(itemRow.order_id, []);
        itemsByOrder.get(itemRow.order_id).push(itemRow);
      }
    }
    return ordersResult.rows.map(row => normalizeOrderRow(row, itemsByOrder.get(row.id) || []));
  },

  async create(order) {
    const db = await getPool();
    const client = await db.connect();
    try {
      await client.query('BEGIN');
      const orderNumber = generateOrderNumber(order);
      await client.query(
        `INSERT INTO orders (
          id, order_number, type, table_number, customer_name, customer_phone, user_type, pickup_time,
          total_quantity, subtotal, tax_rate, tax, cash_total, card_service_rate, card_total, total,
          status, payment_status, data, created_at, updated_at
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19::jsonb,$20,$21
        )`,
        [
          String(order.id), orderNumber, order.type, order.table || '', order.customerName || '', order.customerPhone || '',
          order.userType || 'guest', order.pickupTime || '', Number(order.totalQuantity || 0), order.subtotal || 0,
          order.taxRate || 0, order.tax || 0, order.cashTotal || order.total || 0, order.cardServiceRate || 0,
          order.cardTotal || order.total || 0, order.total || order.cashTotal || 0, order.status || 'new',
          order.paymentStatus || 'unpaid', JSON.stringify({ ...order, orderNumber }), createdAtOf(order), updatedAtOf(order)
        ]
      );

      for (const [index, item] of (order.items || []).entries()) {
        const lineId = `${order.id}-${index}-${String(item.id || item.displayId || 'item').replace(/[^a-zA-Z0-9_-]/g, '')}`;
        await client.query(
          `INSERT INTO order_items (
            id, order_id, line_index, dish_code, display_id, name, name_en, price, quantity, subtotal, note, data
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12::jsonb)`,
          [
            lineId, String(order.id), index, String(item.id || item.displayId || ''), String(item.displayId || item.id || ''),
            item.name || '', item.name_en || '', item.price || 0, Number(item.qty || 0), item.subtotal || 0,
            item.note || '', JSON.stringify(item)
          ]
        );
      }

      await syncMemberFromOrder(client, order);
      await client.query('COMMIT');
      return { ...order, orderNumber };
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  async update(id, nextOrder) {
    const db = await getPool();
    const client = await db.connect();
    try {
      await client.query('BEGIN');
      const existing = await client.query('SELECT order_number, created_at FROM orders WHERE id = $1', [String(id)]);
      if (!existing.rows.length) {
        await client.query('ROLLBACK');
        return null;
      }
      const orderNumber = nextOrder.orderNumber || existing.rows[0].order_number || generateOrderNumber(nextOrder);
      const result = await client.query(
        `UPDATE orders SET
          order_number=$2, type=$3, table_number=$4, customer_name=$5, customer_phone=$6, user_type=$7, pickup_time=$8,
          total_quantity=$9, subtotal=$10, tax_rate=$11, tax=$12, cash_total=$13, card_service_rate=$14,
          card_total=$15, total=$16, status=$17, payment_status=$18, data=$19::jsonb, updated_at=NOW()
         WHERE id=$1 RETURNING *`,
        [
          String(id), orderNumber, nextOrder.type, nextOrder.table || '', nextOrder.customerName || '', nextOrder.customerPhone || '',
          nextOrder.userType || 'guest', nextOrder.pickupTime || '', Number(nextOrder.totalQuantity || 0), nextOrder.subtotal || 0,
          nextOrder.taxRate || 0, nextOrder.tax || 0, nextOrder.cashTotal || nextOrder.total || 0, nextOrder.cardServiceRate || 0,
          nextOrder.cardTotal || nextOrder.total || 0, nextOrder.total || nextOrder.cashTotal || 0, nextOrder.status || 'new',
          nextOrder.paymentStatus || 'unpaid', JSON.stringify({ ...nextOrder, id, orderNumber })
        ]
      );

      await client.query('DELETE FROM order_items WHERE order_id = $1', [String(id)]);
      for (const [index, item] of (nextOrder.items || []).entries()) {
        const lineId = `${id}-${index}-${String(item.id || item.displayId || 'item').replace(/[^a-zA-Z0-9_-]/g, '')}`;
        await client.query(
          `INSERT INTO order_items (id, order_id, line_index, dish_code, display_id, name, name_en, price, quantity, subtotal, note, data)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12::jsonb)`,
          [lineId, String(id), index, String(item.id || item.displayId || ''), String(item.displayId || item.id || ''), item.name || '', item.name_en || '', item.price || 0, Number(item.qty || 0), item.subtotal || 0, item.note || '', JSON.stringify(item)]
        );
      }

      await syncMemberFromOrder(client, { ...nextOrder, id, orderNumber });
      await client.query('COMMIT');
      const items = await query('SELECT * FROM order_items WHERE order_id = $1 ORDER BY line_index ASC', [String(id)]);
      return normalizeOrderRow(result.rows[0], items.rows);
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  async delete(id) {
    const result = await query('DELETE FROM orders WHERE id = $1', [String(id)]);
    return result.rowCount > 0;
  }
};

const reservationStore = {
  async list() {
    const result = await query('SELECT * FROM reservations ORDER BY created_at DESC');
    return result.rows.map(normalizeReservationRow);
  },
  async create(reservation) {
    await query(
      `INSERT INTO reservations (id, name, phone, reservation_date, reservation_time, guests, note, replied, reply_note, status, data, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11::jsonb,$12,$13)`,
      [String(reservation.id), reservation.name, reservation.phone, reservation.date, reservation.time, reservation.guests, reservation.note || '', Boolean(reservation.replied), reservation.replyNote || '', reservation.status || 'new', JSON.stringify(reservation), createdAtOf(reservation), updatedAtOf(reservation)]
    );
    return reservation;
  },
  async update(id, reservation) {
    const result = await query(
      `UPDATE reservations SET name=$2, phone=$3, reservation_date=$4, reservation_time=$5, guests=$6, note=$7,
       replied=$8, reply_note=$9, status=$10, data=$11::jsonb, updated_at=NOW()
       WHERE id=$1 RETURNING *`,
      [String(id), reservation.name, reservation.phone, reservation.date, reservation.time, reservation.guests, reservation.note || '', Boolean(reservation.replied), reservation.replyNote || '', reservation.status || 'new', JSON.stringify({ ...reservation, id })]
    );
    return result.rows[0] ? normalizeReservationRow(result.rows[0]) : null;
  },
  async delete(id) {
    const result = await query('DELETE FROM reservations WHERE id = $1', [String(id)]);
    return result.rowCount > 0;
  }
};

const serviceRequestStore = {
  async list() {
    const result = await query('SELECT * FROM service_requests ORDER BY created_at DESC');
    return result.rows.map(normalizeServiceRequestRow);
  },
  async create(serviceRequest) {
    await query(
      `INSERT INTO service_requests (id, table_number, item, quantity, phone, phone_digits, name, status, data, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11)`,
      [String(serviceRequest.id), serviceRequest.table, serviceRequest.item, Number(serviceRequest.quantity || 1), serviceRequest.phone || '', serviceRequest.phoneDigits || '', serviceRequest.name || '', serviceRequest.status || 'new', JSON.stringify(serviceRequest), createdAtOf(serviceRequest), updatedAtOf(serviceRequest)]
    );
    return serviceRequest;
  },
  async update(id, serviceRequest) {
    const result = await query(
      `UPDATE service_requests SET table_number=$2, item=$3, quantity=$4, phone=$5, phone_digits=$6,
       name=$7, status=$8, data=$9::jsonb, updated_at=NOW()
       WHERE id=$1 RETURNING *`,
      [String(id), serviceRequest.table, serviceRequest.item, Number(serviceRequest.quantity || 1), serviceRequest.phone || '', serviceRequest.phoneDigits || '', serviceRequest.name || '', serviceRequest.status || 'new', JSON.stringify({ ...serviceRequest, id })]
    );
    return result.rows[0] ? normalizeServiceRequestRow(result.rows[0]) : null;
  },
  async delete(id) {
    const result = await query('DELETE FROM service_requests WHERE id = $1', [String(id)]);
    return result.rowCount > 0;
  }
};

export async function initPostgres() {
  const schema = await fs.readFile(schemaPath, 'utf8');
  await query(schema);
}

export async function createPostgresStore() {
  await initPostgres();
  return {
    name: 'postgresql',
    orders: orderStore,
    reservations: reservationStore,
    serviceRequests: serviceRequestStore
  };
}
