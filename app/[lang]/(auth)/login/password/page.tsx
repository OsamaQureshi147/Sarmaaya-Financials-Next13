import Link from 'next/link';

import { Icons } from '@/components/icons';

export default async function LoginWithPasswordPage() {
  return (
    <>
      <Link className="flex w-max self-start" href="/login">
        <Icons.left />
        <p className="ml-3 font-semibold capitalize">back</p>
      </Link>
      <h1 className="first-letter:uppercase">log in</h1>
      <p className="first-letter:uppercase">
        Enter password to log in to your account.
      </p>
    </>
  );
}
