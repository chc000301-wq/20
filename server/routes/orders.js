import { requireAdmin } from '../auth.js';
import { readJsonBody, sendJson } from '../utils/http.js';
import { ORDER_STATUSES, createId, sanitizeOrderInput, validateOrder } from '../utils/validation.js';

export async function handleOrderRoutes(req, res, url, store) {
  if (url.pathname === '/api/orders' && req.method === 'POST') {
    try {
      const body = await readJsonBody(req);
      const order = sanitizeOrderInput(body, {
        id: createId(),
        createdAt: new Date().toISOString(),
        status: 'new'
      });
      order.status = 'new';
      const validationError = validateOrder(order);
      if (validationError) return sendJson(res, 400, { ok: false, message: validationError });
      await store.orders.create(order);
      return sendJson(res, 201, { ok: true, order });
    } catch (error) {
      return sendJson(res, 400, { ok: false, message: error.message });
    }
  }

  if (url.pathname === '/api/admin/orders' && req.method === 'GET') {
    if (!requireAdmin(req, res)) return true;
    return sendJson(res, 200, { ok: true, orders: await store.orders.list() });
  }

  const orderMatch = url.pathname.match(/^\/api\/admin\/orders\/([^/]+)$/);
  if (orderMatch && (req.method === 'PUT' || req.method === 'PATCH')) {
    if (!requireAdmin(req, res)) return true;
    try {
      const id = decodeURIComponent(orderMatch[1]);
      const body = await readJsonBody(req);
      if (body.status !== undefined && !ORDER_STATUSES.includes(String(body.status))) {
        return sendJson(res, 400, { ok: false, message: 'Invalid order status' });
      }
      const orders = await store.orders.list();
      const existing = orders.find(item => String(item.id) === id);
      if (!existing) return sendJson(res, 404, { ok: false, message: 'Order not found' });
      const updatedOrder = sanitizeOrderInput(body, existing);
      const validationError = validateOrder(updatedOrder);
      if (validationError) return sendJson(res, 400, { ok: false, message: validationError });
      const order = await store.orders.update(id, updatedOrder);
      return sendJson(res, 200, { ok: true, order });
    } catch (error) {
      return sendJson(res, 400, { ok: false, message: error.message });
    }
  }

  if (orderMatch && req.method === 'DELETE') {
    if (!requireAdmin(req, res)) return true;
    const id = decodeURIComponent(orderMatch[1]);
    const deleted = await store.orders.delete(id);
    if (!deleted) return sendJson(res, 404, { ok: false, message: 'Order not found' });
    return sendJson(res, 200, { ok: true });
  }

  return false;
}
