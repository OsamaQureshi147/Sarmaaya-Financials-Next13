import { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  UserEmailForm,
  UserEmailFormProps,
} from '@/components/auth/user-email-form';
import { Icons } from '@/components/icons';

export const OnBoardingEmailCard: FC<UserEmailFormProps> = ({ onSubmit }) => {
  return (
    <>
      <h1 className="capitalize">welcome to sarmaaya</h1>
      <Button className="capitalize" variant="outlineShadow">
        <Icons.google />
        <p>continue with google</p>
      </Button>
      <div className="flex items-center justify-center">
        <div className="grow border-t border-gray-300"></div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 font-semibold text-gray-500">
          OR
        </div>
        <div className="grow border-t border-gray-300"></div>
      </div>
      <UserEmailForm onSubmit={onSubmit} />
      <p>
        By proceeding, I accept Sarmaaya <strong>Terms and Conditions</strong>{' '}
        and <strong>Privacy Policy</strong>
      </p>
    </>
  );
};
