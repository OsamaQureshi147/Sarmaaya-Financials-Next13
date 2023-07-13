export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Sarmaaya Financials',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Login',
      href: '/login',
    },
    {
      title: 'Sign Up',
      href: '/signup',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
