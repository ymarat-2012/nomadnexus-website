import Link from 'next/link';
import { NexusMark } from '@/components/Logo';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <NexusMark className={styles.mark} />
      <div className={styles.code}>404</div>
      <h1>Page not found</h1>
      <p className={styles.text}>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        <br />
        Страница не найдена или была перемещена.
      </p>
      <div className={styles.links}>
        <Link href="/en/" className="btn btn-primary">
          Go to homepage
        </Link>
        <Link href="/ru/" className="btn btn-secondary">
          На главную
        </Link>
      </div>
    </div>
  );
}
