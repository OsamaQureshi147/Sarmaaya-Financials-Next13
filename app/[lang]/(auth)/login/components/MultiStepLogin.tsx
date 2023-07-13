'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { LoginFormType } from '@/components/auth/user-login-form';

import { OnBoardingEmailCard } from '../../components/OnBoardingEmailCard';
import { LoginCard } from './LoginCard';

const MultiStepLogin = () => {
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
  const prevStep = useCallback(
    () => setCurrentStep((prev) => --prev),
    [setCurrentStep]
  );

  const onSubmitEmail = useCallback(
    ({ email }: { email: string }) => {
      // check if email exists in our database
      // if it exists
      const emailExists = true;
      // go to the next step if it exists
      if (emailExists) {
        nextStep();
      } else {
        // navigate to verify email screen
        return;
      }
      setUserCredentials((prev) => ({ ...prev, email }));
    },
    [nextStep]
  );

  const handleLogin = ({ email, password }: LoginFormType) => {
    // get user data and store in session
    router.replace('/');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <OnBoardingEmailCard onSubmit={onSubmitEmail} />;
      case 2:
        return (
          <LoginCard
            onSubmit={handleLogin}
            prevStep={prevStep}
            email={userCredentials.email}
          />
        );
      default:
        return <OnBoardingEmailCard onSubmit={onSubmitEmail} />;
    }
  };
  return <>{renderCurrentStep()}</>;
};

export default MultiStepLogin;
