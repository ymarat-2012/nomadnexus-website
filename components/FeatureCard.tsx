import type { ReactNode } from 'react';
import styles from './FeatureCard.module.css';

export function FeatureCard({
  icon,
  title,
  text,
  plain,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  plain?: boolean;
}) {
  return (
    <div className={plain ? styles.card : `card ${styles.card}`}>
      <span className={styles.iconWrap}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
