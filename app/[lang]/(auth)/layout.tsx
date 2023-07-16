import Image from 'next/image';
import onboardingBannerImg from '@/public/images/onboarding-banner.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="grid w-screen rounded-md shadow-2xl md:grid-cols-2 lg:m-auto lg:h-3/4 lg:w-3/5">
        <div className="relative hidden md:flex">
          <Image
            src={onboardingBannerImg}
            alt="onboarding-banner"
            layout="fill"
          />
        </div>
        <div className="flex justify-evenly">{children}</div>
      </div>
    </div>
  );
}
