import crypto from 'node:crypto';

export const ORDER_STATUSES = ['new', 'making', 'ready', 'completed', 'cancelled'];

export function createId() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return Date.now().toString(36) + '-' + crypto.randomBytes(4).toString('hex');
}

export function phoneDigits(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 10);
}

export function formatPhone(value) {
  const digits = phoneDigits(value);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return digits.slice(0, 3) + '-' + digits.slice(3);
  return digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
}

export function isTuesdayDateValue(value) {
  const text = String(value || '').trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day && date.getDay() === 2;
}

export function sanitizeReservationInput(body, existing = {}) {
  const rawPhone = String(body.phone ?? existing.phone ?? '').trim();
  return {
    ...existing,
    name: String(body.name ?? existing.name ?? '').trim(),
    phone: formatPhone(rawPhone),
    date: String(body.date ?? existing.date ?? '').trim(),
    time: String(body.time ?? existing.time ?? '').trim(),
    guests: String(body.guests ?? existing.guests ?? '').trim(),
    note: String(body.note ?? existing.note ?? '').trim(),
    replied: Boolean(body.replied ?? existing.replied ?? false),
    replyNote: String(body.replyNote ?? existing.replyNote ?? '').trim(),
    status: String(body.status ?? existing.status ?? 'new').trim() || 'new',
    updatedAt: new Date().toISOString()
  };
}

export function validateReservation(reservation) {
  if (!reservation.name || !reservation.phone || !reservation.date || !reservation.time || !reservation.guests) return 'Missing reservation fields';
  if (phoneDigits(reservation.phone).length !== 10) return 'Phone must be 10 digits';
  if (isTuesdayDateValue(reservation.date)) return 'Restaurant is closed on Tuesdays';
  return '';
}

function sanitizeOrderItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map(item => {
      const price = Number(item && item.price) || 0;
      const qty = Math.max(0, Math.floor(Number(item && item.qty) || 0));
      return {
        id: String(item && item.id || '').trim(),
        displayId: String(item && (item.displayId || item.id) || '').trim(),
        name: String(item && item.name || '').trim(),
        name_en: String(item && item.name_en || '').trim(),
        price,
        qty,
        subtotal: Math.round(price * qty * 100) / 100,
        note: String(item && item.note || '').trim()
      };
    })
    .filter(item => item.id && item.qty > 0);
}

export function sanitizeOrderInput(body, existing = {}) {
  const items = body.items !== undefined ? sanitizeOrderItems(body.items) : sanitizeOrderItems(existing.items);
  const subtotal = Math.round(items.reduce((sum, item) => sum + item.subtotal, 0) * 100) / 100;
  const status = String(body.status ?? existing.status ?? 'new').trim() || 'new';
  const customerPhone = formatPhone(body.customerPhone ?? existing.customerPhone ?? '');
  const userType = phoneDigits(customerPhone).length === 10 ? 'member' : 'guest';
  const taxRate = Number(body.taxRate ?? existing.taxRate ?? 0.0825) || 0.0825;
  const tax = Math.round(subtotal * taxRate * 100) / 100;
  const cashTotal = Math.round((subtotal + tax) * 100) / 100;
  const cardServiceRate = Number(body.cardServiceRate ?? existing.cardServiceRate ?? 0.02) || 0.02;
  const cardTotal = Math.round(cashTotal * (1 + cardServiceRate) * 100) / 100;
  return {
    ...existing,
    type: String(body.type ?? existing.type ?? 'dinein').trim() === 'takeout' ? 'takeout' : 'dinein',
    table: String(body.table ?? existing.table ?? '').trim(),
    customerName: String(body.customerName ?? existing.customerName ?? '').trim(),
    customerPhone,
    userType,
    pickupTime: String(body.pickupTime ?? existing.pickupTime ?? '').trim(),
    items,
    totalQuantity: items.reduce((sum, item) => sum + item.qty, 0),
    subtotal,
    taxRate,
    tax,
    cashTotal,
    cardServiceRate,
    cardTotal,
    total: cashTotal,
    status: ORDER_STATUSES.includes(status) ? status : 'new',
    updatedAt: new Date().toISOString()
  };
}

export function validateOrder(order) {
  if (!order.items.length) return 'Order must contain at least one item';
  if (order.type === 'dinein') {
    if (!order.table) return 'Dine-in orders require a table number';
    if (phoneDigits(order.customerPhone).length !== 10) return 'Dine-in orders require a 10-digit phone number';
  }
  if (order.type === 'takeout') {
    if (!order.customerName) return 'Takeout orders require a name';
    if (phoneDigits(order.customerPhone).length !== 10) return 'Phone must be 10 digits';
    if (!order.pickupTime) return 'Takeout orders require a pickup time';
  }
  return '';
}

export function sanitizeServiceRequestInput(body, existing = {}) {
  return {
    ...existing,
    table: String(body.table ?? existing.table ?? '').trim().toUpperCase(),
    item: String(body.item ?? existing.item ?? '').trim(),
    quantity: Math.max(1, Math.min(20, Math.floor(Number(body.quantity ?? existing.quantity ?? 1) || 1))),
    phone: formatPhone(body.phone ?? existing.phone ?? ''),
    phoneDigits: phoneDigits(body.phone ?? existing.phone ?? existing.phoneDigits ?? ''),
    name: String(body.name ?? existing.name ?? '').trim(),
    status: String(body.status ?? existing.status ?? 'new').trim() || 'new',
    updatedAt: new Date().toISOString()
  };
}

export function validateServiceRequest(reqData) {
  if (!reqData.table) return 'Service requests require a table number';
  if (!reqData.item) return 'Service requests require an item';
  if (phoneDigits(reqData.phone).length !== 10) return 'Service requests require a 10-digit phone number';
  return '';
}
