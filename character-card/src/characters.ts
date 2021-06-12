import data from './data';

export type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchCharacter = (): Promise<CharacterType> => {
  const character = data[Math.floor(Math.random() * data.length + 1)];
  return Promise.resolve(character);
};
