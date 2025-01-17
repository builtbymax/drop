'use server';

import { auth } from '@/auth/auth';
import { headers } from 'next/headers';

export const userHasSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return false;
  }

  return session;
};