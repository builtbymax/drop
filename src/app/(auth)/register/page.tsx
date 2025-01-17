'use client';
//import { authClient } from '@/auth/client';
//import { useState } from 'react';

export default function SignUp() {
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | undefined>();

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email({ 
        email, 
        password, 
        name, 
        image: image ? convertImageToBase64(image) : undefined, 
    }, { 
        onRequest: (ctx) => { 
         //show loading
          console.log(ctx);
        }, 
        onSuccess: (ctx) => {
          console.log(ctx);
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
      <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );*/

  return (
    <div>
      <h1>Currently registration is not open.</h1>
    </div>
  );
}

// function convertImageToBase64(image: File): string | undefined {
//   console.log(image);
//   throw new Error('Function not implemented.');
// }
