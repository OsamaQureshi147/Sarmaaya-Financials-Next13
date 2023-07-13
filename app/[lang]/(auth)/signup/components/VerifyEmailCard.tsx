import { FC, useEffect, useState } from 'react';

import {
  EmailVerificationForm,
  EmailVerificationFormProps,
} from '@/components/auth/user-email-verify-form';

interface VerifyEmailCardProps extends EmailVerificationFormProps {
  email?: string;
}

const EMAIL_VERIFICATION_DURATION_SECONDS = 60;

export const VerifyEmailCard: FC<VerifyEmailCardProps> = ({
  onSubmit,
  email,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(
    EMAIL_VERIFICATION_DURATION_SECONDS
  );

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [secondsLeft]);

  const canResendVerificationCode = secondsLeft === 0;

  return (
    <>
      <h1>Verify your Email</h1>
      <p>{`A code is sent to your email ${email} for verification.`}</p>
      <EmailVerificationForm onSubmit={onSubmit} />
      <div>
        {!canResendVerificationCode && (
          <p className="text-sm">{`Resend code in: ${secondsLeft} seconds`}</p>
        )}
        <button
          disabled={!canResendVerificationCode}
          className="float-left w-max text-sm capitalize hover:underline disabled:cursor-not-allowed disabled:text-slate-400"
        >
          resend again
        </button>
      </div>
    </>
  );
};
