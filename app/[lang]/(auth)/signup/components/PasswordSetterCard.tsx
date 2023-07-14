import { FC } from 'react';

import {
  PasswordSetterForm,
  PasswordSetterFormProps,
} from '@/components/auth/user-set-password-form';

export const PasswordSetterCard: FC<PasswordSetterFormProps> = ({
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
