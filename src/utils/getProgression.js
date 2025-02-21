import getRandomNumber from './getRandomNumber.js';

const getProgression = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);

  return Array.from({ length }, (_, index) => start + index * step);
};

export default getProgression;
