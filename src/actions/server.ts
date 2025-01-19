'use server';

import { auth } from '@/auth/auth';
import { db } from '@/db/db';
import { entries } from '@/db/schema';
import { and, desc, eq } from 'drizzle-orm';
import { headers } from 'next/headers';

export const userHasSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return false;

  return session;
};

export const getUserId = async () => {
  const session = await userHasSession();
  if (!session) return;

  return session.user.id;
};

// @TODO Add dynamic entry retrieval based on user input (folderId)
export const getEntries = async (folderId: string | null) => {
  const userId = await getUserId();
  if (!userId) return;

  const whereConditions = [
    eq(entries.userId, userId),
  ];

  if (folderId) {
    whereConditions.push(eq(entries.folderId, folderId));
  };

  const data = await db
  .select()
  .from(entries)
  .orderBy(desc(entries.createdAt))
  .where(and(...whereConditions)).catch((error) => {
    console.error('Error getting entries:', error);
    throw new Error('Error getting entries');
  });

  if (!data) return;
  return data;
};

export const addNewEntry = async () => {
  const userId = await getUserId();
  if (!userId) return;

  // @TODO Add dynamic entry creation based on user input

  await
  db.insert(entries).values({
    userId: userId,
    folderId: null,
    type: 'text',
    title: 'Untitled',
    content: 'Mollit excepteur culpa elit sint enim ut. Labore ipsum reprehenderit esse.',
  })
  .catch((error) => {
    console.error('Error saving text:', error);
    throw new Error('Error saving text');
  })
};