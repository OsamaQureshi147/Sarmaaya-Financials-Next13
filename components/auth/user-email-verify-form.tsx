'use client';

import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  VerifyEmailFormSchemaType,
  verifyEmailFormSchema,
} from '@/lib/validations/auth/schemas';
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

export interface EmailVerificationFormProps {
  onSubmit: ({ verificationCode }: VerifyEmailFormSchemaType) => void;
}

export const EmailVerificationForm: FC<EmailVerificationFormProps> = ({
  onSubmit,
}) => {
  const form = useForm<VerifyEmailFormSchemaType>({
    resolver: zodResolver(verifyEmailFormSchema),
    defaultValues: {
      verificationCode: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="verificationCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Code</FormLabel>
              <FormControl>
                <Input placeholder="enter code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full capitalize">
          verify
        </Button>
      </form>
    </Form>
  );
};
