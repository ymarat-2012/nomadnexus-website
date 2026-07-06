import type { Metadata } from 'next';
import { getDictionary } from '@/content';
import type { Locale } from '@/content/site';
import { localeAlternates } from '@/lib/paths';
import { PageHero } from '@/components/PageHero';
import { VendorMark } from '@/components/VendorMark';
import styles from './page.module.css';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const dict = getDictionary(params.locale);
  return {
    title: dict.nav.vendors,
    description: dict.vendors.intro.text,
    alternates: { languages: localeAlternates('vendors') },
  };
}

export default function VendorsPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const { vendors, nav } = dict;

  return (
    <>
      <PageHero eyebrow={nav.vendors} title={vendors.intro.heading} text={vendors.intro.text} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{vendors.oemHeading}</h2>
          </div>
          <div className="grid grid-2">
            <div className={`card ${styles.vendorCard}`}>
              <VendorMark name={vendors.huawei.name} />
              <p className="text-muted">{vendors.huawei.text}</p>
              <div>
                <div className={styles.supplyLabel}>{vendors.huawei.supplyLabel}</div>
                <div className={styles.supplyList}>
                  {vendors.huawei.supplyItems.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`card ${styles.vendorCard}`}>
              <VendorMark name={vendors.netapp.name} />
              <p className="text-muted">{vendors.netapp.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="section-head">
            <h2>{vendors.distributionHeading}</h2>
          </div>
          <div className="grid grid-2">
            <div className={`card ${styles.vendorCard}`}>
              <VendorMark name={vendors.axoft.name} />
              <p className="text-muted">{vendors.axoft.text}</p>
            </div>
            <div className={styles.placeholder}>{vendors.comingSoon}</div>
          </div>
        </div>
      </section>
    </>
  );
}
