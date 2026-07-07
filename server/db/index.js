import { config } from '../config.js';
import { createJsonStore } from './jsonStore.js';
import { createPostgresStore } from './postgresStore.js';

export async function createStore() {
  if (config.databaseUrl) {
    return createPostgresStore();
  }
  return createJsonStore();
}
