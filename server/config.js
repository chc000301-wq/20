import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const SERVER_DIR = path.dirname(__filename);
const ROOT_DIR = path.resolve(SERVER_DIR, '..');

export const config = {
  rootDir: ROOT_DIR,
  preferredPort: Number(process.env.PORT || 3001),
  maxPortTries: Number(process.env.MAX_PORT_TRIES || 10),
  adminUsername: process.env.ADMIN_USERNAME || 'awesome',
  adminPassword: process.env.ADMIN_PASSWORD || '88888888',
  tokenSecret: process.env.TOKEN_SECRET || 'change-this-secret-before-production',
  tokenTtlSeconds: Number(process.env.TOKEN_TTL_SECONDS || 60 * 60 * 8),
  distDir: path.join(ROOT_DIR, 'dist'),
  dataDir: path.join(ROOT_DIR, 'data'),
  databaseUrl: process.env.DATABASE_URL || '',
  dbSsl: String(process.env.DB_SSL || '').toLowerCase() === 'true'
};
