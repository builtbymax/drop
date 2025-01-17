import { userHasSession } from '@/actions/server';
import SignOutButton from '@/components/auth/SignOutButton';
import Link from 'next/link';

export default async function Home() {
  const session = await userHasSession();

  return (
    <div>
      { session ? (
        <div>
          <h1>logged in.</h1>
          <SignOutButton />
          My Data: <br />
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
        ) : (
        <div>
          <h1>NOT logged in.</h1>
          <Link href="/login">Login</Link><br />
          <Link href="/register">Sign Up</Link>
        </div>
        )
      }
    </div>
  );
}
