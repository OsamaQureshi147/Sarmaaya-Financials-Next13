import { FC } from 'react';

import {
  UserEmailForm,
  UserEmailFormProps,
} from '@/components/auth/user-email-form';

export const OnBoardingEmailCard: FC<UserEmailFormProps> = ({ onSubmit }) => {
  return (
    <>
      <h1 className="capitalize">welcome to sarmaaya</h1>
      <UserEmailForm onSubmit={onSubmit} />
      <p>
        By proceeding, I accept Sarmaaya <strong>Terms and Conditions</strong>{' '}
        and <strong>Privacy Policy</strong>
      </p>
    </>
  );
};
