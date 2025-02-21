import getRandomNumber from '../utils/getRandomNumber.js';
import findGCD from '../utils/findGCD.js';
import startGame from '../utils/startGame.js';

const gameLogic = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findGCD(randomNumber1, randomNumber2).toString();

  return { question, correctAnswer };
};

const startGcdGame = () => {
  startGame(
    'Find the greatest common divisor of given numbers.',
    gameLogic,
  );
};

export default startGcdGame;
