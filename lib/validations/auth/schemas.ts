import { z } from 'zod';

export const emailFormSchema = z.object({
  email: z.string().email().min(5),
});

export const loginFormSchema = emailFormSchema.extend({
  password: z.string().min(4, {
    message: 'Password must contain atleast 4 character(s)',
  }),
});

export const verifyEmailFormSchema = z.object({
  verificationCode: z.string(),
});

export type EmailFormSchemaType = z.infer<typeof emailFormSchema>;
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
export type VerifyEmailFormSchemaType = z.infer<typeof verifyEmailFormSchema>;
