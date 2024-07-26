import { Question } from '@/types';
import {
  getRandomQuestion,
  getGameQuestions,
  randomizeQuestionsAnswers,
  getCorrectAnswersIndexes,
  getCorrectAnswersCount,
  getLevels,
} from './questionsHelper';

const questions: Array<Question> = [
  {
    text: 'Test question 1',
    answers: [
      {
        text: 'Answer 1',
        isCorrect: true,
      },
      {
        text: 'Answer 2',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Test question 2',
    answers: [
      {
        text: 'Answer 1',
        isCorrect: false,
      },
      {
        text: 'Answer 2',
        isCorrect: true,
      },
    ],
  },
  {
    text: 'Test question 3',
    answers: [
      {
        text: 'Answer 1',
        isCorrect: true,
      },
      {
        text: 'Answer 2',
        isCorrect: true,
      },
    ],
  },
  {
    text: 'Test question 4',
    answers: [
      {
        text: 'Answer 1',
        isCorrect: true,
      },
      {
        text: 'Answer 2',
        isCorrect: true,
      },
      {
        text: 'Answer 3',
        isCorrect: false,
      },
    ],
  },
];

describe('Questions helper functions', () => {
  it('Should get random question', () => {
    const result = getRandomQuestion(questions);
    expect(result).not.toBeFalsy();
  });

  it('Should get game questions array with length 2', () => {
    const perGame = 2;
    const result = getGameQuestions(questions, 2);

    expect(result.length).toEqual(perGame);
  });

  it('Should randomize qustions answers', () => {
    const qustionIndex = 3;
    const result = randomizeQuestionsAnswers(questions);
    const { answers } = questions[qustionIndex];
    const ramdomizedAnswers = result[qustionIndex].answers;

    expect(ramdomizedAnswers).not.toEqual(answers);
  });

  it('Should get correct answers indexes', () => {
    const { answers } = questions[3];
    const result = getCorrectAnswersIndexes(answers);

    expect(result).toEqual([0, 1]);
  });

  it('Should get correct answers count', () => {
    const { answers } = questions[3];
    const result = getCorrectAnswersCount(answers);

    expect(result).toEqual(2);
  });

  it('Should get levels correct', () => {
    const result = getLevels(10, 2, 4);
    expect(result[3]).toEqual(80);
  });
});
