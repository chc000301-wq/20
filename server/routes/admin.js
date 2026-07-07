import { config } from '../config.js';
import { createToken, getBearerToken, verifyToken } from '../auth.js';
import { readJsonBody, sendJson } from '../utils/http.js';

export async function handleAdminRoutes(req, res, url) {
  if (url.pathname === '/api/admin/login' && req.method === 'POST') {
    try {
      const body = await readJsonBody(req);
      const username = String(body.username || '').trim();
      const password = String(body.password || '').trim();
      if (username === config.adminUsername && password === config.adminPassword) {
        return sendJson(res, 200, { ok: true, username, token: createToken(username) });
      }
      return sendJson(res, 401, { ok: false, message: 'Invalid admin username or password' });
    } catch (error) {
      return sendJson(res, 400, { ok: false, message: error.message });
    }
  }

  if (url.pathname === '/api/admin/verify' && req.method === 'GET') {
    const session = verifyToken(getBearerToken(req));
    if (!session) return sendJson(res, 401, { ok: false, message: 'Unauthorized' });
    return sendJson(res, 200, { ok: true, username: session.username });
  }

  return false;
}
