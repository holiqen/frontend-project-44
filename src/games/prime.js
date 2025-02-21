import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';
import startGame from '../utils/startGame.js';

const gameLogic = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: `${randomNumber}`,
    correctAnswer,
  };
};

const startPrimeGame = () => {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    gameLogic,
  );
};

export default startPrimeGame;
