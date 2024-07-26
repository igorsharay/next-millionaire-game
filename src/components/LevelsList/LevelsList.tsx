'use client';

import { useGameConfig } from '@/context/GameConfigContext';
import { useGame } from '@/context/GameContext';
import { currencyFormat } from '@/helpers';
import { getLevels } from '@/helpers/questionsHelper';
import { useMemo } from 'react';
import LevelItem from '../LevelItem/LevelItem';
import styles from './LevelsList.module.css';

function LevelsList() {
  const { prize, prizeMultiplier } = useGameConfig();
  const { currentLevel, gameQuestions } = useGame();

  const levels = useMemo(
    () => getLevels(prize, prizeMultiplier, gameQuestions.length),
    [prize, prizeMultiplier, gameQuestions.length],
  );

  const renderLevels = useMemo(() => {
    if (!levels.length) {
      return <div>No levels</div>;
    }

    const levelsList = levels.map((item: number, i: number) => (
      <LevelItem
        key={item}
        isActive={i === currentLevel - 1}
        isDisabled={i < currentLevel - 1}
        text={currencyFormat(item)}
      />
    ));

    return levelsList.reverse();
  }, [currentLevel, levels]);

  return <div className={styles.levelsList}>{renderLevels}</div>;
}

export default LevelsList;
