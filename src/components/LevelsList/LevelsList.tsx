'use client';

import { useGameConfig } from '@/context/GameConfigContext';
import { useGame } from '@/context/GameContext';
import { currencyFormat } from '@/helpers';
import { useMemo } from 'react';
import LevelItem from '../LevelItem/LevelItem';
import styles from './LevelsList.module.css';

function LevelsList() {
  const {
    levels: { reward, currency },
  } = useGameConfig();
  const { currentLevel } = useGame();

  const renderLevels = useMemo(() => {
    if (!reward?.length) {
      return <div>No levels</div>;
    }

    const levelsList = reward.map((item: number, i: number) => (
      <LevelItem
        key={item}
        isActive={i === currentLevel - 1}
        isDisabled={i < currentLevel - 1}
        text={currencyFormat(item, currency)}
      />
    ));

    return levelsList.reverse();
  }, [currentLevel, reward, currency]);

  return <div className={styles.levelsList}>{renderLevels}</div>;
}

export default LevelsList;
