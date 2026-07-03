import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/content';
import { LOCALES, type Locale } from '@/content/site';
import { localeAlternates } from '@/lib/paths';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocaleHtml } from '@/components/LocaleHtml';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s — Nomad Nexus`,
    },
    description: dict.meta.description,
    alternates: {
      languages: localeAlternates('home'),
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      <LocaleHtml locale={locale} />
      <a href="#main" className="skip-link">
        {dict.common.skipToContent}
      </a>
      <Header locale={locale} dict={dict} />
      <main id="main">{children}</main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
