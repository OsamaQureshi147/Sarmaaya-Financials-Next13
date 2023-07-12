'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { emailFormSchema } from '@/lib/validations/auth/userEmailSchema';
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

export function UserEmailForm() {
  const router = useRouter();
  const form = useForm<EmailFormType>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = ({ email }: EmailFormType) => {
    console.log('OnSubmit', email);
    router.push('/login/password');
  };

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
}
