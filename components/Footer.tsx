import Link from 'next/link';
import type { Locale } from '@/content/site';
import type { Dictionary } from '@/content/types';
import { SITE } from '@/content/site';
import { localePath } from '@/lib/paths';
import { NexusMark } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PhoneIcon, MailIcon } from './icons';
import styles from './Footer.module.css';

const NAV_KEYS = ['home', 'vendors', 'solutions', 'projects', 'about', 'contact'] as const;

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <Link href={localePath(locale, 'home')} className={styles.brand}>
              <NexusMark className={styles.brandMark} />
              <span>Nomad Nexus</span>
            </Link>
            <p className={styles.tagline}>{dict.footer.tagline}</p>
          </div>

          <div>
            <div className={styles.heading}>{dict.footer.navHeading}</div>
            <nav className={styles.list} aria-label="Footer">
              {NAV_KEYS.map((key) => (
                <Link key={key} href={localePath(locale, key)}>
                  {dict.nav[key]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className={styles.heading}>{dict.contact.header}</div>
            <div className={styles.list}>
              <a
                className={styles.contactRow}
                href={SITE.phoneHref}
                aria-label={`${dict.contact.details.phoneLabel}: ${SITE.phone}`}
              >
                <PhoneIcon />
                {SITE.phone}
              </a>
              <a
                className={styles.contactRow}
                href={SITE.emailHref}
                aria-label={`${dict.contact.details.emailLabel}: ${SITE.email}`}
              >
                <MailIcon />
                {SITE.email}
              </a>
              <span className={styles.contactRow}>{dict.footer.foundedLocation}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{dict.footer.copyright.replace('{year}', String(year))}</span>
          <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
        </div>
      </div>
    </footer>
  );
}
