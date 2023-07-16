import Link from 'next/link';

import { Icons } from '@/components/icons';

interface SignUpPageLayoutProps {
  children: React.ReactNode;
}

export default async function SignUpPageLayout({
  children,
}: SignUpPageLayoutProps) {
  return (
    <div className="container grid items-center gap-5">
      <Link href="/" className="cursor-pointer">
        <Icons.logo height={44} width={130} className="mx-auto my-0" />
      </Link>
      {children}
    </div>
  );
}
