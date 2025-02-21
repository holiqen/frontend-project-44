import getRandomNumber from '../utils/getRandomNumber.js';
import getRandomOperator from '../utils/getRandomOperator.js';
import calculate from '../utils/calculate.js';
import startGame from '../utils/startGame.js';

const gameLogic = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const randomOperator = getRandomOperator();

  const { success, result, error } = calculate(randomNumber1, randomNumber2, randomOperator);

  if (!success) {
    console.error(`Error: ${error}`);
    return { question: '', correctAnswer: '' };
  }

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return { question, correctAnswer: result.toString() };
};

const startCalcGame = () => {
  startGame(
    'What is the result of the expression?',
    gameLogic,
  );
};

export default startCalcGame;
