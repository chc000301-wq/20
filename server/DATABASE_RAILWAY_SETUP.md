# Railway PostgreSQL setup

This project now has a production PostgreSQL schema for orders, order items, reservations, service requests, members, and future admin users.

## Railway steps

1. Open the Railway project.
2. Add a PostgreSQL database service.
3. Open the web service settings and add these variables:

```txt
DATABASE_URL=${{Postgres.DATABASE_URL}}
ADMIN_USERNAME=<your admin username>
ADMIN_PASSWORD=<your strong admin password>
TOKEN_SECRET=<long random secret>
NODE_ENV=production
```

Optional when using an external PostgreSQL connection:

```txt
DB_SSL=true
```

4. Set Railway commands:

```txt
Build Command: npm install && npm run build
Start Command: npm start
```

The backend automatically runs the schema safely on startup when `DATABASE_URL` exists. You can also run it manually:

```bash
npm run db:migrate
```

## Tables created

```txt
orders
order_items
reservations
service_requests
members
admin_users
```

## Important note

Local development still works without a database. If `DATABASE_URL` is empty, the backend uses `data/*.json` as before. On Railway production, always use PostgreSQL.
