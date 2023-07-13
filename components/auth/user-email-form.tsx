'use client';

import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { emailFormSchema } from '@/lib/validations/auth/schemas';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type EmailFormType = z.infer<typeof emailFormSchema>;
export interface UserEmailFormProps {
  onSubmit: ({ email }: EmailFormType) => void;
}

export const UserEmailForm: FC<UserEmailFormProps> = ({ onSubmit }) => {
  const form = useForm<EmailFormType>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email Address</FormLabel>
              <FormControl>
                <Input placeholder="example@abc.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full capitalize">
          continue
        </Button>
      </form>
    </Form>
  );
};
