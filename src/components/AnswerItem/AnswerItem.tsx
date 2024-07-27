import AnswerImage from '@/images/answer.svg';
import React, { useMemo, useRef } from 'react';
import styles from './AnswerItem.module.css';

interface AnswerItemProps {
  letter: string;
  text: string;
  isActive?: boolean;
  isCorrect?: boolean;
  clickHandler?: () => void;
}

const AnswerItem: React.FC<AnswerItemProps> = ({
  letter,
  text,
  isActive = false,
  isCorrect,
  clickHandler,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const stateClasses = useMemo(() => {
    let cls = '';

    if (isActive) {
      cls = styles.active;

      if (isCorrect !== undefined) {
        cls = `${cls} ${isCorrect ? styles.correct : styles.wrong}`;
      }
    }

    return cls;
  }, [isActive, isCorrect]);

  const buttonClickHandler = useMemo(
    () =>
      !isActive && clickHandler
        ? () => {
            btnRef.current?.blur();
            clickHandler();
          }
        : undefined,
    [clickHandler, isActive],
  );

  return (
    <button
      ref={btnRef}
      className={`${styles.answerItem} ${stateClasses}`}
      onClick={buttonClickHandler}
    >
      <AnswerImage className={styles.answerBgImage} />
      <div className={styles.answerText}>
        <span className={styles.answerVariantLetter}>{letter}</span>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default AnswerItem;
