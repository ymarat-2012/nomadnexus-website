export const SITE = {
  name: 'Nomad Nexus',
  phone: '+996 702 021052',
  phoneHref: 'tel:+996702021052',
  email: 'office@nomadnexus.kg',
  emailHref: 'mailto:office@nomadnexus.kg',
  foundedYear: 2025,
} as const;

export const ROUTES = {
  home: '',
  vendors: 'vendors',
  solutions: 'solutions',
  projects: 'projects',
  about: 'about',
  contact: 'contact',
} as const;

export type RouteKey = keyof typeof ROUTES;

export const LOCALES = ['en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
