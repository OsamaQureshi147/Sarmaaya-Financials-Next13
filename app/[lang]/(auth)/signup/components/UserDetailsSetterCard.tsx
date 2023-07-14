import { FC } from 'react';

import {
  PasswordSetterForm,
  PasswordSetterFormProps,
} from '@/components/auth/user-set-password-form';

interface UserDetailsSetterCardProps extends PasswordSetterFormProps {
  email: string;
}

export const UserDetailsSetterCard: FC<UserDetailsSetterCardProps> = ({
  onSubmit,
}) => {
  return (
    <>
      <h1 className="capitalize">welcome back</h1>
      <p className="first-letter:capitalize">
        set password for your sarmaaya account
      </p>
      <PasswordSetterForm onSubmit={onSubmit} />
    </>
  );
};
