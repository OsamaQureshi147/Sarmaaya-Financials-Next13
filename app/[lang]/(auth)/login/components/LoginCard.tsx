import { FC } from 'react';
import Link from 'next/link';

import {
  UserLoginForm,
  UserLoginFormProps,
} from '@/components/auth/user-login-form';
import { Icons } from '@/components/icons';

interface LoginCardProps extends UserLoginFormProps {
  email?: string;
  prevStep: () => void;
}

export const LoginCard: FC<LoginCardProps> = ({
  onSubmit,
  prevStep,
  email,
}) => {
  return (
    <>
      <button className="flex w-max self-start" onClick={prevStep}>
        <Icons.left />
        <p className="ml-3 font-semibold capitalize">back</p>
      </button>
      <h1 className="first-letter:uppercase">log in</h1>
      <p className="first-letter:uppercase">
        Enter password to log in to your account.
      </p>
      <UserLoginForm onSubmit={onSubmit} email={email} />
      <p>
        Don&apos;t have an account?{' '}
        <Link href="signup">
          <strong className="hover:underline">Sign up</strong>
        </Link>
      </p>
    </>
  );
};
