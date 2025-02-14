import { getRandomNumber } from "../utils/getRandomNumber.js";
import { isEven } from "../utils/isEven.js";
import { startGame } from "../utils/startGame.js";

const gameLogic = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  return { question, correctAnswer };
};

export const startEvenGame = () => {
  startGame(
    "Answer \"yes\" if the number is even, otherwise answer \"no\".",
    gameLogic
  );
};