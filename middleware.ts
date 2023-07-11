import { NextRequest, NextResponse } from 'next/server';

// import { match } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';

let locales = ['en', 'ar', 'ur'];
export let defaultLocale = 'en';

// function getLocale(request: Request): string {
//   const headers = new Headers(request.headers);
//   const acceptLanguage = headers.get('accept-language');
//   if (acceptLanguage) {
//     headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
//   }

//   const headersObject = Object.fromEntries(headers.entries());
//   const languages = new Negotiator({ headers: headersObject }).languages();
//   return match(languages, locales, defaultLocale);
// }

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const userPreferredLocale = getLocale(request);

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    // e.g. incoming request is /en/products
    // The new URL is now /products
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale}`,
          pathname === `/${defaultLocale}` ? '/' : ''
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /products
    // Tell Next.js it should pretend it's /en/products
    return NextResponse.rewrite(
      new URL(`/${userPreferredLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
