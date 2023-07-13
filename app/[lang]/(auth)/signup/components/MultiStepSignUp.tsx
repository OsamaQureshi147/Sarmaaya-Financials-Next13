'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { LoginFormType } from '@/components/auth/user-login-form';

import { OnBoardingEmailCard } from '../../components/OnBoardingEmailCard';
import { VerifyEmailCard } from './VerifyEmailCard';

export const MultiStepSignUp = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const nextStep = useCallback(
    () => setCurrentStep((prev) => ++prev),
    [setCurrentStep]
  );

  const onSubmitEmail = useCallback(
    ({ email }: { email: string }) => {
      // check if email exists in our database
      // if it exists
      const emailExists = false;
      if (emailExists) {
        // navigate to login screen
        return;
      } else {
        // go to the next signup step if it does not exists
        nextStep();
      }
      setUserCredentials((prev) => ({ ...prev, email }));
    },
    [nextStep]
  );

  const handleVerificationCodeSubmit = ({ email, password }: LoginFormType) => {
    // get user data and store in session
    router.replace('/');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <OnBoardingEmailCard onSubmit={onSubmitEmail} />;
      case 2:
        return (
          <VerifyEmailCard
            onSubmit={handleVerificationCodeSubmit}
            email={userCredentials.email}
          />
        );
      default:
        return <OnBoardingEmailCard onSubmit={onSubmitEmail} />;
    }
  };
  return <>{renderCurrentStep()}</>;
};
