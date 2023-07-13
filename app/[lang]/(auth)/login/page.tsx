import { getDictionary } from '@/dictionaries';

import { Locale } from '@/types/global';

import { MultiStepLogin } from './components/MultiStepLogin';

interface LoginEmailPageProps {
  params: {
    lang: Locale;
  };
}

export default async function LoginEmailPage({
  params: { lang },
}: LoginEmailPageProps) {
  const dict = await getDictionary(lang);
  return (
    <>
      <MultiStepLogin />
    </>
  );
}
