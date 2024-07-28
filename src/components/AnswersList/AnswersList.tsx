'use client';

import AnswerItem from '@/components/AnswerItem/AnswerItem';
import { getLetter, removeSpaces } from '@/helpers';
import { getCorrectAnswersCount } from '@/helpers/questionsHelper';
import { useCheckAnswer } from '@/hooks/useCheckAnswer';
import { Answer } from '@/types';
import { useCallback, useMemo } from 'react';
import styles from './AnswersList.module.css';

interface AnswersListProps {
  answers: Array<Answer>;
}

const delay = 3000; // animation last 2s, runs in 1s after animation finish

function AnswersList({ answers }: AnswersListProps) {
  const { selectedAnswer, setSelectedAnswer } = useCheckAnswer(delay);

  const clickAnswerHandler = useCallback(
    (answerIndex: number) => {
      setSelectedAnswer((prev) => [...prev, answerIndex]);
    },
    [setSelectedAnswer],
  );

  const isClickable = useMemo(
    () => !selectedAnswer.length || getCorrectAnswersCount(answers) !== selectedAnswer.length,
    [answers, selectedAnswer.length],
  );

  const renderAnswers = useMemo(() => {
    if (!answers?.length) {
      return <div>No answers</div>;
    }

    return answers.map((item: Answer, index: number) => {
      const isCorrectProp = !isClickable
        ? selectedAnswer.includes(index) && item.isCorrect
        : undefined;

      const clickHandlerProp =
        isClickable && !selectedAnswer.includes(index)
          ? () => clickAnswerHandler(index)
          : undefined;

      return (
        <AnswerItem
          key={removeSpaces(item.text)}
          index={index}
          letter={getLetter(index)}
          text={item.text}
          isActive={selectedAnswer.includes(index)}
          isCorrect={isCorrectProp}
          clickHandler={clickHandlerProp}
        />
      );
    });
  }, [answers, selectedAnswer, isClickable, clickAnswerHandler]);

  return <div className={styles.answersList}>{renderAnswers}</div>;
}

export default AnswersList;
