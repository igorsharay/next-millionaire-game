import AnswerImage from '@/images/answer.svg';
import React, { KeyboardEvent, useMemo } from 'react';
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
  const stateClasses = useMemo(
    () => (isCorrect !== undefined ? (isCorrect ? styles.correct : styles.wrong) : ''),
    [isCorrect],
  );

  const clickEvents = useMemo(
    () => ({
      ...(!isActive && clickHandler
        ? {
          onClick: clickHandler,
          onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.code === '13') {
              clickHandler();
            }
          },
        }
        : {}),
    }),
    [clickHandler, isActive],
  );

  return (
    <div
      role="button"
      tabIndex={-1}
      className={`${styles.answerItem} ${isActive ? `${styles.active} ${stateClasses}` : ''}`}
      {...clickEvents}
    >
      <AnswerImage className={styles.answerBgImage} />
      <div className={styles.answerText}>
        <span className={styles.answerVariantLetter}>{letter}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default AnswerItem;
