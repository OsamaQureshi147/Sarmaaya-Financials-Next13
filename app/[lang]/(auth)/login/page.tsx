import { getDictionary } from '@/dictionaries';

import { Locale } from '@/types/global';
import { UserEmailForm } from '@/components/auth/user-email-form';

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
      <h1 className="capitalize">{dict.onBoarding.welcomeText}</h1>
      <UserEmailForm />
      <p>
        By proceeding, I accept Sarmaaya <strong>Terms and Conditions</strong>{' '}
        and <strong>Privacy Policy</strong>
      </p>
    </>
  );
}
