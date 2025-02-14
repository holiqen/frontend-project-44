const MIN_VALUE = 1;
const MAX_VALUE = 100;
const RANGE_OFFSET = 1;

export const getRandomNumber = (minValue = MIN_VALUE, maxValue = MAX_VALUE) =>
  Math.floor(Math.random() * (maxValue - minValue + RANGE_OFFSET)) + minValue;
