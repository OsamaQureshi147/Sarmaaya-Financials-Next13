import { FC } from 'react';

import {
  PasswodSetterFormProps,
  PasswordSetterForm,
} from '@/components/auth/user-set-password-form';

export const PasswordSetterCard: FC<PasswodSetterFormProps> = ({
  onSubmit,
}) => {
  return (
    <>
      <h1 className="capitalize">set password</h1>
      <p className="first-letter:capitalize">
        set password for your sarmaaya account
      </p>
      <PasswordSetterForm onSubmit={onSubmit} />
    </>
  );
};
