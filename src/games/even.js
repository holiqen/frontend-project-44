import { getRandomNumber } from "../utils/getRandomNumber.js";
import { isEven } from "../utils/isEven.js";
import { askUserName } from "../utils/askUserName.js";
import { playRounds } from "../utils/playRounds.js";

const NUMBER_OF_ROUND = 3;

const gameLogic = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  return { question, correctAnswer };
};

export const startEvenGame = () => {
  const userName = askUserName();
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
  playRounds(userName, NUMBER_OF_ROUND, gameLogic);
};