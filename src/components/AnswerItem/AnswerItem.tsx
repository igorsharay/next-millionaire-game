import useWindowDimensions from '@/hooks/useWindowDimentions';
import AnswerImage from '@/images/answer.svg';
import AnswerMobImage from '@/images/answer-mob.svg';
import React, { useMemo, useRef } from 'react';
import { removeSpaces } from '@/helpers';
import styles from './AnswerItem.module.css';

interface AnswerItemProps {
  index: number;
  letter: string;
  text: string;
  isCorrect?: boolean;
  isActive?: boolean;
  isActiveCorrect?: boolean;
  clickHandler?: () => void;
}

const maxAnswerLength = 60;
const mobBrakePoint = 768;

const getAnswerState = (isCorrect: boolean) => (isCorrect ? styles.correct : styles.wrong);

const AnswerItem: React.FC<AnswerItemProps> = ({
  index,
  letter,
  text,
  isActive = false,
  isCorrect,
  isActiveCorrect,
  clickHandler,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { width } = useWindowDimensions();
  const isMobile = width < mobBrakePoint;

  const stateClasses = useMemo(() => {
    let cls = '';

    if (isActive) {
      cls = styles.active;

      if (isActiveCorrect !== undefined) {
        cls = `${cls} ${getAnswerState(isActiveCorrect)}`;
      }
    } else if (!isActiveCorrect && isCorrect !== undefined) {
      cls = getAnswerState(isCorrect);
    }

    return cls;
  }, [isActive, isActiveCorrect, isCorrect]);

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

  const reducedText = useMemo(
    () => (text.length > maxAnswerLength ? text.slice(0, maxAnswerLength + 1) : text),
    [text],
  );

  return (
    <button
      key={removeSpaces(text)}
      ref={btnRef}
      className={`${styles.answerItem} ${stateClasses}`}
      onClick={buttonClickHandler}
    >
      {isMobile ? (
        <AnswerMobImage className={styles.answerBgImage} />
      ) : (
        <AnswerImage className={styles.answerBgImage} />
      )}
      <div className={styles.answerText} style={{ animationDelay: `${index * 0.3}s` }}>
        <span className={styles.answerVariantLetter}>{letter}</span>
        <span>{reducedText}</span>
      </div>
    </button>
  );
};

export default AnswerItem;
