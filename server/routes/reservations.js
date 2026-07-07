import { requireAdmin } from '../auth.js';
import { readJsonBody, sendJson } from '../utils/http.js';
import { createId, sanitizeReservationInput, validateReservation } from '../utils/validation.js';

export async function handleReservationRoutes(req, res, url, store) {
  if (url.pathname === '/api/reservations' && req.method === 'POST') {
    try {
      const body = await readJsonBody(req);
      const reservation = sanitizeReservationInput(body, {
        id: createId(),
        createdAt: new Date().toISOString(),
        replied: false,
        replyNote: '',
        status: 'new'
      });
      const validationError = validateReservation(reservation);
      if (validationError) return sendJson(res, 400, { ok: false, message: validationError });
      await store.reservations.create(reservation);
      return sendJson(res, 201, { ok: true, reservation });
    } catch (error) {
      return sendJson(res, 400, { ok: false, message: error.message });
    }
  }

  if (url.pathname === '/api/admin/reservations' && req.method === 'GET') {
    if (!requireAdmin(req, res)) return true;
    return sendJson(res, 200, { ok: true, reservations: await store.reservations.list() });
  }

  const reservationMatch = url.pathname.match(/^\/api\/admin\/reservations\/([^/]+)$/);
  if (reservationMatch && (req.method === 'PUT' || req.method === 'PATCH')) {
    if (!requireAdmin(req, res)) return true;
    try {
      const id = decodeURIComponent(reservationMatch[1]);
      const body = await readJsonBody(req);
      const reservations = await store.reservations.list();
      const existing = reservations.find(item => String(item.id) === id);
      if (!existing) return sendJson(res, 404, { ok: false, message: 'Reservation not found' });
      const updatedReservation = sanitizeReservationInput(body, existing);
      const validationError = validateReservation(updatedReservation);
      if (validationError) return sendJson(res, 400, { ok: false, message: validationError });
      const reservation = await store.reservations.update(id, updatedReservation);
      return sendJson(res, 200, { ok: true, reservation });
    } catch (error) {
      return sendJson(res, 400, { ok: false, message: error.message });
    }
  }

  if (reservationMatch && req.method === 'DELETE') {
    if (!requireAdmin(req, res)) return true;
    const id = decodeURIComponent(reservationMatch[1]);
    const deleted = await store.reservations.delete(id);
    if (!deleted) return sendJson(res, 404, { ok: false, message: 'Reservation not found' });
    return sendJson(res, 200, { ok: true });
  }

  return false;
}
