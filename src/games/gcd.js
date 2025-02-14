import { getRandomNumber } from "../utils/getRandomNumber.js";
import { askUserName } from "../utils/askUserName.js";
import { playRounds } from "../utils/playRounds.js";
import { findGCD } from "../utils/findGCD.js";

const NUMBER_OF_ROUND = 3;

const gameLogic = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = findGCD(randomNumber1, randomNumber2).toString();

    return { question, correctAnswer };
};

export const startGcdGame = () => {
    const userName = askUserName();
    console.log("Find the greatest common divisor of given numbers.");
    playRounds(userName, NUMBER_OF_ROUND, gameLogic);
};