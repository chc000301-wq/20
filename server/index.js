import http from 'node:http';
import { config } from './config.js';
import { sendJson, sendOptions, serveStatic } from './utils/http.js';
import { createStore } from './db/index.js';
import { handleAdminRoutes } from './routes/admin.js';
import { handleReservationRoutes } from './routes/reservations.js';
import { handleOrderRoutes } from './routes/orders.js';
import { handleServiceRequestRoutes } from './routes/serviceRequests.js';

const store = await createStore();

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  try {
    if (req.method === 'OPTIONS') return sendOptions(res);

    if (url.pathname === '/api/health') {
      return sendJson(res, 200, {
        ok: true,
        service: 'awesome-restaurant-backend',
        storage: store.name
      });
    }

    if (await handleAdminRoutes(req, res, url)) return;
    if (await handleReservationRoutes(req, res, url, store)) return;
    if (await handleOrderRoutes(req, res, url, store)) return;
    if (await handleServiceRequestRoutes(req, res, url, store)) return;

    if (url.pathname.startsWith('/api/')) {
      return sendJson(res, 404, { ok: false, message: 'API route not found' });
    }

    return serveStatic(req, res);
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { ok: false, message: 'Internal server error' });
  }
});

function listenWithFallback(port, remainingTries) {
  server.once('error', error => {
    if (error.code === 'EADDRINUSE' && remainingTries > 0) {
      const nextPort = port + 1;
      console.log(`Port ${port} is already in use. Trying http://localhost:${nextPort} ...`);
      listenWithFallback(nextPort, remainingTries - 1);
      return;
    }

    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      console.error('Windows PowerShell fix:');
      console.error(`  netstat -ano | findstr :${port}`);
      console.error('  taskkill /PID <PID_NUMBER> /F');
      console.error('Or start this project on another port:');
      console.error('  $env:PORT=3002; npm start');
      process.exit(1);
    }

    console.error(error);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log('----------------------------------------');
    console.log(`Awesome Restaurant server running on http://localhost:${port}`);
    console.log(`Storage: ${store.name}`);
    console.log(`Open member login: http://localhost:${port}/#/member`);
    console.log(`Admin username: ${config.adminUsername}`);
    console.log('Admin password: ********');
    console.log('----------------------------------------');
  });
}

listenWithFallback(config.preferredPort, config.maxPortTries);
