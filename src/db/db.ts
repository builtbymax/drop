import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

const pool = new Pool({
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT || '5432'),
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  max: 2,
});

const db = drizzle(pool);

export { db, pool };