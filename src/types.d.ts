export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  text: string;
  answers: Array<Answer>;
}

export interface GameConfig {
  prize: number;
  prizeMultiplier: number;
  questionsPerGame: number;
  questions: Array<Question>;
}
