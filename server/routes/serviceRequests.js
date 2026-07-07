import { requireAdmin } from '../auth.js';
import { readJsonBody, sendJson } from '../utils/http.js';
import { createId, sanitizeServiceRequestInput, validateServiceRequest } from '../utils/validation.js';

export async function handleServiceRequestRoutes(req, res, url, store) {
  if (url.pathname === '/api/service-requests' && req.method === 'POST') {
    try {
      const body = await readJsonBody(req);
      const serviceRequest = sanitizeServiceRequestInput(body, {
        id: createId(),
        createdAt: new Date().toISOString(),
        status: 'new'
      });
      serviceRequest.status = 'new';
      const validationError = validateServiceRequest(serviceRequest);
      if (validationError) return sendJson(res, 400, { ok: false, message: validationError });
      await store.serviceRequests.create(serviceRequest);
      return sendJson(res, 201, { ok: true, request: serviceRequest });
    } catch (error) {
      return sendJson(res, 400, { ok: false, message: error.message });
    }
  }

  if (url.pathname === '/api/admin/service-requests' && req.method === 'GET') {
    if (!requireAdmin(req, res)) return true;
    return sendJson(res, 200, { ok: true, requests: await store.serviceRequests.list() });
  }

  const serviceRequestMatch = url.pathname.match(/^\/api\/admin\/service-requests\/([^/]+)$/);
  if (serviceRequestMatch && req.method === 'DELETE') {
    if (!requireAdmin(req, res)) return true;
    const id = decodeURIComponent(serviceRequestMatch[1]);
    const deleted = await store.serviceRequests.delete(id);
    if (!deleted) return sendJson(res, 404, { ok: false, message: 'Service request not found' });
    return sendJson(res, 200, { ok: true });
  }

  return false;
}
