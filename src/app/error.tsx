'use client';

import Button from '@/components/Button/Button';
import styles from './errorsPages.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>Something went wrong!</h4>

      <details className={styles.details}>
        <pre className={styles.pre}>
          {error.name}: {error.message}
        </pre>
      </details>

      <Button clickHandler={() => reset()}>Try again</Button>
    </div>
  );
}
