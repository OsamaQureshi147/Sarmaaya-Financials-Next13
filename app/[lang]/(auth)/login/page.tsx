import { getDictionary } from '@/dictionaries';

import { Locale } from '@/types/global';
import { Icons } from '@/components/icons';
import UserAuthForm from '@/components/user-auth-form';

interface LoginPage {
  params: {
    lang: Locale;
  };
}

export default async function LoginPage({ params: { lang } }: LoginPage) {
  const dict = await getDictionary(lang);
  return (
    <div className="container grid items-center justify-center gap-8 pb-8 pt-6">
      <div className="flex justify-center">
        <Icons.logo height={44} width={130} />
      </div>
      <h1 className="text-3xl font-bold capitalize">
        {dict.onBoarding.welcomeText}
      </h1>
      <UserAuthForm dict={dict} />
      <p>
        <span>{`${dict.onBoarding.byProceeding}, `}</span>
        <span>{`${dict.onBoarding.iAccept} Sarmaaya `}</span>
        <span>
          <strong>{dict.onBoarding.termsAndConditions}</strong>
        </span>
        <span className="mx-1">and</span>
        <span>
          <strong>{dict.onBoarding.privacyPolicy}</strong>
        </span>
      </p>
    </div>
  );
}
