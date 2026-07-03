import type { ReactNode } from 'react';
import styles from './PageHero.module.css';

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
}) {
  return (
    <div className={`container ${styles.hero}`}>
      {eyebrow ? <div className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</div> : null}
      <h1 className={styles.title}>{title}</h1>
      {text ? <p className={`lead ${styles.text}`}>{text}</p> : null}
    </div>
  );
}
