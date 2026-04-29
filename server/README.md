# API + PostgreSQL Setup

This project uses a plain Node/Express API and an existing PostgreSQL server.

1. Create a PostgreSQL database:

```sql
CREATE DATABASE transformers_marks;
```

2. Create `.env` in the project root:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/transformers_marks
API_PORT=4000
ADMIN_PASSWORD=admin123
```

3. Run database migration and seed:

```bash
npm run db:migrate
npm run db:seed
```

4. Start the API:

```bash
npm run dev:api
```

5. Start the React app in another terminal:

```bash
npm run dev
```

The React dev server proxies `/api` to `http://127.0.0.1:4000`.
