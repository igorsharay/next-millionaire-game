import useWindowDimensions from '@/hooks/useWindowDimentions';
import AnswerImage from '@/images/answer.svg';
import AnswerMobImage from '@/images/answer-mob.svg';
import React, { useMemo, useRef } from 'react';
import styles from './AnswerItem.module.css';

interface AnswerItemProps {
  letter: string;
  text: string;
  isActive?: boolean;
  isCorrect?: boolean;
  clickHandler?: () => void;
}

const acceptableAnswerLength = 60;
const mobBrakePoint = 768;

const AnswerItem: React.FC<AnswerItemProps> = ({
  letter,
  text,
  isActive = false,
  isCorrect,
  clickHandler,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { width } = useWindowDimensions();
  const isMobile = width < mobBrakePoint;

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

  const reducedText =
    text.length > acceptableAnswerLength ? text.slice(0, acceptableAnswerLength + 1) : text;

  return (
    <button
      ref={btnRef}
      className={`${styles.answerItem} ${stateClasses}`}
      onClick={buttonClickHandler}
    >
      {isMobile ? (
        <AnswerMobImage className={styles.answerBgImage} />
      ) : (
        <AnswerImage className={styles.answerBgImage} />
      )}
      <div className={styles.answerText}>
        <span className={styles.answerVariantLetter}>{letter}</span>
        <span>{reducedText}</span>
      </div>
    </button>
  );
};

export default AnswerItem;
