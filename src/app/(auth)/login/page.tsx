'use client'

import { authClient } from '@/auth/client'
import { useState } from 'react'
import { useRouter, redirect } from 'next/navigation'
import { Logo } from '@/components/common/logo'
import Image from 'next/image'
import './styles.scss'
import { LoginSchema } from '@/schemas/schemas'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const signIn = async () => {
    const validationResult = LoginSchema.safeParse({ email, password })
    if (!validationResult.success) {
      alert('ZOD: Invalid email or password')
      return
    }

    const { data, error } = await authClient.signIn.email(
      { email, password },
      {
        onRequest: (ctx) => {
          //show loading
          console.log(ctx)
        },
        onSuccess: (ctx) => {
          console.log(ctx)
          router.push('/')
          //redirect to the dashboard
        },
        onError: (ctx) => {
          alert(ctx.error.message)
        },
      },
    )

    if (error) console.log(error)
    if (data) console.log(data)
  }

  const { data: session } = authClient.useSession()
  if (session) redirect('/')

  return (
    <div className="login-page-container">
      <div className="form-column">
        <Logo />
        <div className="form-container">
          <div className="form">
            <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn}>Login</button>
          </div>
        </div>
      </div>
      <div className="media-column">
        <div className="media">
          <Image src="/login-bg.jpg" width={1400} height={1400} alt="login" />
        </div>
      </div>
    </div>
  )
}
