'use client';

import Button from '@/components/Button/Button';
import { useGame } from '@/context/GameContext';
import styles from './RightComponent.module.css';

function RightComponent() {
  const { startGame } = useGame();

  const startGameHandler = () => {
    startGame();
  };

  return (
    <>
      <h1>
        Who wants to be <span className={styles.titlePart}>a millionaire?</span>
      </h1>
      <div className={styles.btnContainer}>
        <Button clickHandler={startGameHandler}>Start</Button>
      </div>
    </>
  );
}

export default RightComponent;
