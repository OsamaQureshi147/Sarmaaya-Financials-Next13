import { getDictionary } from '@/dictionaries';

import { Locale } from '@/types/global';

import { MultiStepSignUp } from './components/MultiStepSignUp';

interface SignUpPageProps {
  params: {
    lang: Locale;
  };
}

export default async function SignUpPage({
  params: { lang },
}: SignUpPageProps) {
  const dict = await getDictionary(lang);
  return (
    <>
      <MultiStepSignUp />
    </>
  );
}
