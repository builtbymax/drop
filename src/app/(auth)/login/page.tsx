'use client';

import { authClient } from '@/auth/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signIn = async () => {
    const { data, error } = await authClient.signIn.email({ 
        email, 
        password,
    }, { 
        onRequest: (ctx) => { 
         //show loading
          console.log(ctx);
        }, 
        onSuccess: (ctx) => {
          console.log(ctx);
          router.push('/');
          //redirect to the dashboard
        }, 
        onError: (ctx) => { 
          alert(ctx.error.message); 
        }, 
      });

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <div>
      <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Login</button>
    </div>
  );
}
