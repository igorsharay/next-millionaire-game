import Image from 'next/image';
import styles from './HandImage.module.css';

function HandImage() {
  return (
    <Image
      className={styles.image}
      src="/images/hand.svg"
      alt="hand waving"
      width="624"
      height="367"
      priority
    />
  );
}

export default HandImage;
