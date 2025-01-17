import { defineConfig } from 'drizzle-kit';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: DATABASE_HOST || '',
    port: parseInt(DATABASE_PORT || '5432'),
    user: DATABASE_USER || '',
    password: DATABASE_PASSWORD || '',
    database: DATABASE_NAME || '',
    ssl: false,
  },
});
