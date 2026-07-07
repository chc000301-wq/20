import { initPostgres } from './postgresStore.js';
import { config } from '../config.js';

if (!config.databaseUrl) {
  console.error('DATABASE_URL is required before running database migration.');
  process.exit(1);
}

try {
  await initPostgres();
  console.log('Database migration completed successfully.');
  process.exit(0);
} catch (error) {
  console.error('Database migration failed:');
  console.error(error);
  process.exit(1);
}
