import { z } from 'zod';

export const emailFormSchema = z.object({
  email: z.string().email().min(5),
});

export const loginFormSchema = emailFormSchema.extend({
  password: z.string().min(4, {
    message: 'Password must contain atleast 4 character(s)',
  }),
});
