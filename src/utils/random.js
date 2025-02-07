const MIN_VALUE = 1;
const MAX_VALUE = 100;

export const getRandomNumber = () =>
  Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + MIN_VALUE)) + MIN_VALUE;
