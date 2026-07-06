import type { Metadata } from 'next';
import { getDictionary } from '@/content';
import type { Locale } from '@/content/site';
import { SITE } from '@/content/site';
import { localeAlternates } from '@/lib/paths';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';
import styles from './page.module.css';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: dict.nav.contact,
    description: dict.contact.intro,
    alternates: { languages: localeAlternates('contact') },
  };
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const { contact, nav } = dict;

  return (
    <>
      <PageHero eyebrow={nav.contact} title={contact.header} text={contact.intro} />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.details}>
              <a
                className={styles.detailRow}
                href={SITE.phoneHref}
                aria-label={`${contact.details.phoneLabel}: ${SITE.phone}`}
              >
                <PhoneIcon />
                {SITE.phone}
              </a>
              <a
                className={styles.detailRow}
                href={SITE.emailHref}
                aria-label={`${contact.details.emailLabel}: ${SITE.email}`}
              >
                <MailIcon />
                {SITE.email}
              </a>
              <span className={styles.detailRow}>
                <MapPinIcon />
                {contact.details.location}
              </span>
            </div>

            <div className="card">
              <ContactForm form={contact.form} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
