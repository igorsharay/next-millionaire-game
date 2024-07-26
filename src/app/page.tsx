import GameContainer from '@/containers/GameContainer/GameContainer';
import { GameConfigProvider } from '@/context/GameConfigContext';
import { GameProvider } from '@/context/GameContext';
import getGameConfig from '@/lib/data';

export default async function Home() {
  const data = await getGameConfig();

  return (
    <GameConfigProvider>
      <GameProvider>
        <GameContainer
          questions={data.questions}
          questionsPerGame={data.questionsPerGame}
          prize={data.prize}
          prizeMultiplier={data.prizeMultiplier}
        />
      </GameProvider>
    </GameConfigProvider>
  );
}
