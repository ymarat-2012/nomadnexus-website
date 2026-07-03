import type { Metadata } from 'next';
import { getDictionary } from '@/content';
import type { Locale } from '@/content/site';
import { localeAlternates } from '@/lib/paths';
import { PageHero } from '@/components/PageHero';
import { CheckIcon } from '@/components/icons';
import styles from './page.module.css';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: dict.nav.solutions,
    description: dict.solutions.intro.text,
    alternates: { languages: localeAlternates('solutions') },
  };
}

export default function SolutionsPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const { solutions, nav } = dict;

  return (
    <>
      <PageHero eyebrow={nav.solutions} title={solutions.intro.heading} text={solutions.intro.text} />

      {solutions.items.map((item) => (
        <section key={item.id} id={item.id} className="section section--bordered">
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionBody}>
                <h2>{item.title}</h2>
                <p className="lead">{item.tagline}</p>
                <p className="text-muted">{item.body}</p>
              </div>
              <div className={`card ${styles.includesCard}`}>
                <div className={styles.includesLabel}>{item.includesLabel}</div>
                <ul className={styles.includesList}>
                  {item.includes.map((point) => (
                    <li key={point}>
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
