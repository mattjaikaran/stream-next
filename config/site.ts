export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Stream Next',
  description: 'Video Streaming App Description',
  mainNav: [
    {
      title: 'About',
      href: '/about',
      external: false,
    },
    {
      title: 'Contact',
      href: '/contact',
      external: false,
    },
  ],
  dashboardNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      external: false,
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      external: false,
    },
  ],
};
