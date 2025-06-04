import { z } from 'zod/v4'

// https://v4.zod.dev/basics

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export const AddEntrySchema = z.object({
  title: z.string().min(1),
  content: z
    .string()
    .min(1)
    .refine((val) => {
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
      return urlPattern.test(val)
    }, 'Invalid URL'),
})

export const getZodErrorMessages = (error: z.ZodError) => {
  const errors = error.issues.map((err) => {
    if (err.path.length > 0) {
      return `[${String(err.path[0])}]: "${err.message}"`
    }
    return err.message
  })
  return errors.join(', ')
}
