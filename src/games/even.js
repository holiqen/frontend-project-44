import { getRandomNumber } from "../utils/random.js";
import readlineSync from "readline-sync";
import { isEven } from "../utils/isEven.js";

const NUMBER_OF_ROUND = 3;

const playRound = (userName, remainingRounds) => {
  if (remainingRounds === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question("Your answer: ").toLowerCase();
  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    return playRound(userName, remainingRounds - 1);
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const startEvenGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

  playRound(userName, NUMBER_OF_ROUND);
};