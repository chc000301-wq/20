import crypto from 'node:crypto';
import { config } from './config.js';
import { sendJson } from './utils/http.js';

function sign(value) {
  return crypto.createHmac('sha256', config.tokenSecret).update(value).digest('base64url');
}

export function createToken(username) {
  const payload = Buffer.from(JSON.stringify({
    username,
    exp: Math.floor(Date.now() / 1000) + config.tokenTtlSeconds
  })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [payload, signature] = token.split('.');
  const expected = sign(payload);
  try {
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!data.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    if (data.username !== config.adminUsername) return null;
    return data;
  } catch (error) {
    return null;
  }
}

export function getBearerToken(req) {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return '';
  return header.slice('Bearer '.length).trim();
}

export function requireAdmin(req, res) {
  const session = verifyToken(getBearerToken(req));
  if (!session) {
    sendJson(res, 401, { ok: false, message: 'Unauthorized' });
    return null;
  }
  return session;
}
