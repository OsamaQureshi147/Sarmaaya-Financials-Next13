'use client';

import React, { useCallback, useState } from 'react';

import {
  SetPasswordSchemaType,
  VerifyEmailFormSchemaType,
} from '@/lib/validations/auth/schemas';

import { OnBoardingEmailCard } from '../../components/OnBoardingEmailCard';
import { PasswordSetterCard } from './PasswordSetterCard';
import { VerifyEmailCard } from './VerifyEmailCard';

export const MultiStepSignUp = () => {
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

  const handleVerificationCodeSubmit = ({
    verificationCode,
  }: VerifyEmailFormSchemaType) => {
    // check if the entered code is correct

    // if correct, proceed to next step
    nextStep();

    console.log('Verification Code:', verificationCode);
  };

  const onSubmitPassword = ({ password }: SetPasswordSchemaType) => {
    console.log('Password', password);
    // set password for the user and move to the next step
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
      case 3:
        return <PasswordSetterCard onSubmit={onSubmitPassword} />;
      default:
        return <OnBoardingEmailCard onSubmit={onSubmitEmail} />;
    }
  };
  return <>{renderCurrentStep()}</>;
};
