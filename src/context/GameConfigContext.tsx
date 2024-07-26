'use client';

import { Question } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface GameConfigContextType {
  prize: number;
  prizeMultiplier: number;
  questions: Array<Question>;
  questionsPerGame: number;
  setPrize: (v: number) => void;
  setPrizeMultiplier: (v: number) => void;
  setQuestions: (q: Array<Question>) => void;
  setQuestionsPerGame: (n: number) => void;
}

interface GameConfigProviderProps {
  children: React.ReactNode;
}

const GameConfigContext = createContext<GameConfigContextType | undefined>(undefined);

export const GameConfigProvider: React.FC<GameConfigProviderProps> = ({ children }) => {
  const [prize, setPrize] = useState(0);
  const [prizeMultiplier, setPrizeMultiplier] = useState(0);
  const [questionsPerGame, setQuestionsPerGame] = useState(0);
  const [questions, setQuestions] = useState<Array<Question>>([]);

  const value = useMemo(
    () => ({
      prize,
      prizeMultiplier,
      questions,
      questionsPerGame,
      setPrize,
      setPrizeMultiplier,
      setQuestions,
      setQuestionsPerGame,
    }),
    [prize, prizeMultiplier, questions, questionsPerGame],
  );

  return <GameConfigContext.Provider value={value}>{children}</GameConfigContext.Provider>;
};

export const useGameConfig = () => {
  const context = useContext(GameConfigContext);
  if (!context) {
    throw new Error('useGameConfig must be used within a GameConfigProvider');
  }

  return context;
};
