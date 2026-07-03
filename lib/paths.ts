import { LOCALES, ROUTES, type RouteKey } from '@/content/site';
import type { Locale } from '@/content/site';

export function localePath(locale: Locale, key: RouteKey): string {
  const slug = ROUTES[key];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function localeAlternates(key: RouteKey): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale, key)])) as Record<
    Locale,
    string
  >;
}

export function withLocale(pathname: string, target: Locale): string {
  const segments = pathname.split('/');
  if (segments.length > 1) {
    segments[1] = target;
  }
  let next = segments.join('/');
  if (!next.startsWith('/')) next = `/${next}`;
  if (!next.endsWith('/')) next += '/';
  return next;
}
