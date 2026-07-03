import type { Metadata } from 'next';
import { getDictionary } from '@/content';
import type { Locale } from '@/content/site';
import { localeAlternates } from '@/lib/paths';
import { PageHero } from '@/components/PageHero';
import { FeatureCard } from '@/components/FeatureCard';
import { NodeLinkIcon, RepeatIcon, MapPinIcon, ScaleIcon } from '@/components/icons';
import styles from './page.module.css';

const APPROACH_ICONS = [NodeLinkIcon, RepeatIcon, MapPinIcon, ScaleIcon];

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: dict.nav.about,
    description: dict.about.mission,
    alternates: { languages: localeAlternates('about') },
  };
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const { about, nav } = dict;

  return (
    <>
      <PageHero eyebrow={nav.about} title={about.header} text={about.mission} />

      <section className="section--tight">
        <div className="container">
          <div className={styles.narrative}>
            {about.narrative.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="section-head">
            <h2>{about.approachHeading}</h2>
          </div>
          <div className="grid grid-4">
            {about.approach.map((item, i) => {
              const Icon = APPROACH_ICONS[i];
              return <FeatureCard key={item.title} icon={<Icon />} title={item.title} text={item.text} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
