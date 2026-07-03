import styles from './VendorMark.module.css';

export function VendorMark({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`${styles.mark} ${className ?? ''}`}>
      <span className={styles.dot}>●&nbsp;</span>
      {name}
    </span>
  );
}
