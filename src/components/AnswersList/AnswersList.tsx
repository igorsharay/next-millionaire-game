'use client';

import AnswerItem from '@/components/AnswerItem/AnswerItem';
import { getLetter } from '@/helpers';
import { getCorrectAnswersCount } from '@/helpers/questionsHelper';
import { useCheckAnswer } from '@/hooks/useCheckAnswer';
import { Answer } from '@/types';
import { useCallback, useMemo } from 'react';
import styles from './AnswersList.module.css';

interface AnswersListProps {
  answers: Array<Answer>;
}

const delay = 3000; // runs in 1s after animation finishes

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

    return answers.map((item: Answer, index: number) => (
      <AnswerItem
        key={getLetter(index)}
        letter={getLetter(index)}
        text={item.text}
        isActive={selectedAnswer.includes(index)}
        {...(!isClickable ? { isCorrect: selectedAnswer.includes(index) && item.isCorrect } : {})}
        {...(isClickable && !selectedAnswer.includes(index)
          ? { clickHandler: () => clickAnswerHandler(index) }
          : {})}
      />
    ));
  }, [answers, selectedAnswer, isClickable, clickAnswerHandler]);

  return <div className={styles.answersList}>{renderAnswers}</div>;
}

export default AnswersList;
