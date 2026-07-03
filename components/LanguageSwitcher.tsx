'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, type Locale } from '@/content/site';
import { withLocale } from '@/lib/paths';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() || `/${locale}/`;

  return (
    <div className={`${styles.switch} ${className ?? ''}`} role="group" aria-label={label}>
      {LOCALES.map((option) => {
        const isActive = option === locale;
        return (
          <Link
            key={option}
            href={withLocale(pathname, option)}
            className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
            aria-current={isActive ? 'true' : undefined}
            hrefLang={option}
          >
            {option.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
