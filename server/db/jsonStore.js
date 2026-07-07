import fs from 'node:fs';
import path from 'node:path';
import { config } from '../config.js';

const files = {
  reservations: path.join(config.dataDir, 'reservations.json'),
  orders: path.join(config.dataDir, 'orders.json'),
  serviceRequests: path.join(config.dataDir, 'serviceRequests.json')
};

function ensureDataFiles() {
  if (!fs.existsSync(config.dataDir)) fs.mkdirSync(config.dataDir, { recursive: true });
  Object.values(files).forEach(file => {
    if (!fs.existsSync(file)) fs.writeFileSync(file, '[]', 'utf8');
  });
}

function readList(name) {
  ensureDataFiles();
  try {
    const data = JSON.parse(fs.readFileSync(files[name], 'utf8') || '[]');
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function writeList(name, items) {
  ensureDataFiles();
  fs.writeFileSync(files[name], JSON.stringify(items, null, 2), 'utf8');
}

function createCollectionApi(name) {
  return {
    async list() {
      return readList(name);
    },
    async create(item) {
      const items = readList(name);
      items.unshift(item);
      writeList(name, items);
      return item;
    },
    async update(id, nextItem) {
      const items = readList(name);
      const index = items.findIndex(item => String(item.id) === String(id));
      if (index === -1) return null;
      items[index] = nextItem;
      writeList(name, items);
      return items[index];
    },
    async delete(id) {
      const items = readList(name);
      const nextItems = items.filter(item => String(item.id) !== String(id));
      if (nextItems.length === items.length) return false;
      writeList(name, nextItems);
      return true;
    }
  };
}

export function createJsonStore() {
  return {
    name: 'json-file',
    reservations: createCollectionApi('reservations'),
    orders: createCollectionApi('orders'),
    serviceRequests: createCollectionApi('serviceRequests')
  };
}
