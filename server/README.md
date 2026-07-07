# Backend structure

This backend is now split for Railway-ready deployment.

## Runtime modes

- No `DATABASE_URL`: uses local JSON files in `data/` for local development.
- With `DATABASE_URL`: uses PostgreSQL and creates the first required tables automatically.

## Railway environment variables

Required before production:

```txt
DATABASE_URL=<Railway PostgreSQL connection string>
ADMIN_USERNAME=<admin login name>
ADMIN_PASSWORD=<strong password>
TOKEN_SECRET=<long random secret>
NODE_ENV=production
```

Optional:

```txt
DB_SSL=true
TOKEN_TTL_SECONDS=28800
```

## API endpoints kept compatible

```txt
GET  /api/health
POST /api/admin/login
GET  /api/admin/verify
POST /api/reservations
GET  /api/admin/reservations
PATCH/PUT /api/admin/reservations/:id
DELETE /api/admin/reservations/:id
POST /api/orders
GET  /api/admin/orders
PATCH/PUT /api/admin/orders/:id
DELETE /api/admin/orders/:id
POST /api/service-requests
GET  /api/admin/service-requests
DELETE /api/admin/service-requests/:id
```
