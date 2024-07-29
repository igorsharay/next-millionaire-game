'use client';

import { Currencies, Levels, Question } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface GameConfigContextType {
  questions: Array<Question>;
  levels: Levels;
  setQuestions: (q: Array<Question>) => void;
  setLevels: (v: Levels) => void;
}

interface GameConfigProviderProps {
  children: React.ReactNode;
}

const gameConfigDefaults = {
  questions: [],
  levels: {
    currency: 'USD' as Currencies,
    reward: [],
  },
};

const GameConfigContext = createContext<GameConfigContextType | undefined>(undefined);

export const GameConfigProvider: React.FC<GameConfigProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<Array<Question>>(gameConfigDefaults.questions);
  const [levels, setLevels] = useState<Levels>(gameConfigDefaults.levels);

  const value = useMemo(
    () => ({
      questions,
      levels,
      setQuestions,
      setLevels,
    }),
    [questions, levels],
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
