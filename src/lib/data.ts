import { GameConfig } from '@/types';
import { promises as fs } from 'fs';

export default async function getGameConfig() {
  const file = await fs.readFile(`${process.cwd()}/src/lib/game-config.json`, 'utf8');
  const data = JSON.parse(file);

  return data as GameConfig;
}
