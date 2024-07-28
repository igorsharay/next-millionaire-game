import Link from 'next/link';
import Button from '@/components/Button/Button';
import styles from './errorsPages.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.p}>Could not find requested resource</p>

      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
