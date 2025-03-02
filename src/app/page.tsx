import { userHasSession } from '@/actions/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await userHasSession();

  if (session) redirect('/dashboard');
  redirect('/login');
}
