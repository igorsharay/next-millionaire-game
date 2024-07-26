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
  const stateClasses = useMemo(() => {
    if (isCorrect !== undefined) {
      return isCorrect ? styles.correct : styles.wrong;
    }

    return '';
  }, [isCorrect]);

  const onClickProp = useMemo(
    () => (!isActive && clickHandler ? clickHandler : undefined),
    [clickHandler, isActive],
  );

  const onKeyDownProp = useMemo(() => {
    if (!isActive && clickHandler) {
      return (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === '13') {
          clickHandler();
        }
      };
    }
    return undefined;
  }, [clickHandler, isActive]);

  return (
    <div
      role="button"
      tabIndex={-1}
      className={`${styles.answerItem} ${isActive ? `${styles.active} ${stateClasses}` : ''}`}
      onClick={onClickProp}
      onKeyDown={onKeyDownProp}
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
