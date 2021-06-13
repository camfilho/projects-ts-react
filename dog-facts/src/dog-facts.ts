import { data } from './data';

export type DogFactType = {
  id: number;
  fact: string;
};

// These are here just in case the API goes down. 🤷
function shuffleArray(array: Array<DogFactType>) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

export const fetchDogFacts = (n: number) => {
  return Promise.resolve(data).then((facts) => shuffleArray(facts).slice(0, n));
};
