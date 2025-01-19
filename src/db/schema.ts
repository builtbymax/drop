import { pgTable, text, timestamp, boolean, varchar, jsonb } from 'drizzle-orm/pg-core';
import nodeCrypto from 'crypto';
//import nodeCrypto from 'crypto'; .$defaultFn(() => nodeCrypto.randomUUID()),

export type SelectEntry = typeof entries.$inferSelect;
export type Entry = Pick<SelectEntry, 'id' | 'title' | 'content' | 'tags' | 'createdAt' | 'updatedAt'>;

export type SelectUser = typeof user.$inferSelect;
export type User = typeof user.$inferSelect;

export type SelectSession = typeof session.$inferSelect;
export type Session = typeof session.$inferSelect;
      
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(()=> user.id)
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(()=> user.id),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at')
});

// @ts-expect-error folders has no type
export const folders = pgTable('folders', {
  id: text('id')
  .primaryKey()
  .$defaultFn(() => nodeCrypto.randomUUID()),
  userId: text('user_id').references(() => user.id).notNull(),
  // @ts-expect-error folders has no type
  parentFolderId: text('parent_folder_id').references(() => folders.id),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow()
});

export const entries = pgTable('entries', {
  id: text('id')
  .primaryKey()
  .$defaultFn(() => nodeCrypto.randomUUID()),
  userId: text('user_id').references(() => user.id),
  folderId: text('folder_id').references(() => folders.id),
  type: varchar('type', { length: 50 }).$type<'image' | 'link' | 'text' | 'file' | 'video'>().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content'),
  tags: text('tags'),
  file: jsonb('file').$type<{ 
    path?: string; 
    fileName?: string;
    fileSize?: number; 
    mimeType?: string;
    key?: string;
    dimension?: { width: number; height: number; };
    extension?: string;
  }>(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});
