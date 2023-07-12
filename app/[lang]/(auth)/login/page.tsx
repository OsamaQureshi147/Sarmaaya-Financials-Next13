import { getDictionary } from '@/dictionaries';

import { Locale } from '@/types/global';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface LoginPage {
  params: {
    lang: Locale;
  };
}

export default async function LoginPage({ params: { lang } }: LoginPage) {
  const dict = await getDictionary(lang);
  return (
    <div className="container grid items-center justify-center gap-6 pb-8 pt-6">
      <div className="flex justify-center">
        <Icons.logo height={44} width={130} />
      </div>
      <h1 className="text-3xl font-bold capitalize">
        {dict.onBoarding.welcomeText}
      </h1>
      <Button className="capitalize" variant="outlineShadow">
        <Icons.google />
        <p>continue with google</p>
      </Button>
      {/* <div className="relative border border-zinc-300">
        <div className="absolute flex h-[39px] w-[39px] items-center justify-center rounded-full border border-zinc-300 bg-white text-center">
          or
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="grow border-t border-zinc-300"></div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 font-semibold text-gray-500">
          OR
        </div>
        <div className="grow border-t border-zinc-300"></div>
      </div>
      <Button className="capitalize">
        <p>{dict.onBoarding.continue}</p>
      </Button>
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
