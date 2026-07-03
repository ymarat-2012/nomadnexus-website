import Link from 'next/link';
import { getDictionary } from '@/content';
import type { Locale } from '@/content/site';
import { localePath } from '@/lib/paths';
import { NetworkGraphic } from '@/components/NetworkGraphic';
import { FeatureCard } from '@/components/FeatureCard';
import { VendorMark } from '@/components/VendorMark';
import {
  ShieldCheckIcon,
  CompassIcon,
  LayersIcon,
  InfinityIcon,
  ArrowRightIcon,
} from '@/components/icons';
import styles from './page.module.css';

const WHY_US_ICONS = [ShieldCheckIcon, CompassIcon, LayersIcon, InfinityIcon];

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <h1>{dict.home.hero.headline}</h1>
            <p className="lead">{dict.home.hero.subhead}</p>
            <div className={styles.heroActions}>
              <Link href={localePath(locale, 'contact')} className="btn btn-primary">
                {dict.home.hero.primaryCta}
              </Link>
              <Link href={localePath(locale, 'vendors')} className="btn btn-secondary">
                {dict.home.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <NetworkGraphic className={styles.heroGraphic} />
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="section-head">
            <h2>{dict.home.whyUs.heading}</h2>
          </div>
          <div className="grid grid-4">
            {dict.home.whyUs.items.map((item, i) => {
              const Icon = WHY_US_ICONS[i];
              return <FeatureCard key={item.title} icon={<Icon />} title={item.title} text={item.text} />;
            })}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className={styles.aboutTeaser}>
            <h2>{dict.home.aboutTeaser.heading}</h2>
            <p className="lead">{dict.home.aboutTeaser.text}</p>
            <Link href={localePath(locale, 'about')} className="link-arrow">
              {dict.home.aboutTeaser.linkLabel}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className={styles.vendorHead}>
            <div className="eyebrow">{dict.home.vendorsTeaser.eyebrow}</div>
            <p className="lead">{dict.home.vendorsTeaser.text}</p>
          </div>
          <div className={styles.vendorRow}>
            <VendorMark name="Huawei" />
            <VendorMark name="NetApp" />
            <span className="chip">{dict.home.vendorsTeaser.comingSoon}</span>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="section-head">
            <h2>{dict.home.solutionsTeaser.heading}</h2>
          </div>
          <div className="grid grid-3">
            {dict.solutions.items.map((item) => (
              <Link
                key={item.id}
                href={`${localePath(locale, 'solutions')}#${item.id}`}
                className={`card card--interactive ${styles.solutionCard}`}
              >
                <h3>{item.title}</h3>
                <p className="text-muted">{item.tagline}</p>
                <span className="link-arrow">
                  <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>{dict.home.finalCta.headline}</h2>
            <p className="lead">{dict.home.finalCta.text}</p>
            <Link href={localePath(locale, 'contact')} className="btn btn-primary">
              {dict.home.finalCta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
