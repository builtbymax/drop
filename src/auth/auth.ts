import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db/db'
import { user, account, session, verification } from '@/db/schema'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: user,
      account: account,
      session: session,
      verification: verification,
    },
  }),

  trustedOrigins: [process.env.BETTER_AUTH_URL || 'https://drop.ddev.site'],

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  /*
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET, 
    } 
  },
  */
})
