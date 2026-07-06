import type { Metadata } from 'next';
import { getDictionary } from '@/content';
import type { Locale } from '@/content/site';
import { localeAlternates } from '@/lib/paths';
import { PageHero } from '@/components/PageHero';
import styles from './page.module.css';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: dict.nav.projects,
    description: dict.projects.intro.text,
    alternates: { languages: localeAlternates('projects') },
  };
}

export default function ProjectsPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const { projects, nav } = dict;

  return (
    <>
      <PageHero eyebrow={nav.projects} title={projects.intro.heading} text={projects.intro.text} />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {projects.cases.map((item) => (
              <div key={item.title} className={`card ${styles.caseCard}`}>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
