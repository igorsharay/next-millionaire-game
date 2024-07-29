export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  text: string;
  answers: Array<Answer>;
}
export type Currencies = 'USD' | 'EUR';

export interface Levels {
  currency: Currencies;
  reward: number[];
}

export interface GameConfig {
  questions: Array<Question>;
  levels: Levels;
}
