import { shuffle } from '@/helpers';
import { Answer, Question } from '@/types';

export const getRandomQuestion = (questions: Array<Question>) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

export const getGameQuestions = (
  questions: Array<Question>,
  questionsPerGame: number,
): Array<Question> => {
  const gameQuestions = new Set<Question>();
  const stopCount = questions.length > questionsPerGame ? questionsPerGame : questions.length;

  while (gameQuestions.size < stopCount) {
    const randomQuestion = getRandomQuestion(questions);
    gameQuestions.add(randomQuestion);
  }

  return Array.from(gameQuestions);
};

export const randomizeQuestionsAnswers = (questions: Array<Question>) => {
  const shuffled = questions.map((question) => {
    const shuffledAnswers = shuffle(question.answers) as Array<Answer>;
    return { ...question, answers: shuffledAnswers };
  });

  return shuffled;
};

export const getCorrectAnswersIndexes = (answers: Array<Answer>) => {
  const correctIndexes = answers.reduce<number[]>((acc, curr, i) => {
    if (curr.isCorrect) {
      return [...acc, i];
    }

    return acc;
  }, []);

  return correctIndexes;
};

export const getCorrectAnswersCount = (answers: Array<Answer>) =>
  getCorrectAnswersIndexes(answers).length;

export const checkCorrectAnswers = (answers: Array<Answer>, selectedAnswer: number[]) => {
  const correctIndexes = getCorrectAnswersIndexes(answers);

  if (correctIndexes.length !== selectedAnswer.length) {
    return false;
  }

  const sortedAnswers = [...selectedAnswer].sort();

  if (correctIndexes.join() !== sortedAnswers.join()) {
    return false;
  }

  return true;
};

export const getLevels = (prize: number, prizeMultiplier: number, length: number) => {
  const levels = [prize];

  for (let i = 1; i < length; i++) {
    levels.push(levels[i - 1] * prizeMultiplier);
  }

  return levels;
};
