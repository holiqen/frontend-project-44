import { getRandomNumber } from "../utils/getRandomNumber.js";
import { getRandomOperator } from "../utils/getRandomOperator.js";
import { calculate } from "../utils/calculate.js";
import { askUserName } from "../utils/askUserName.js";
import { playRounds } from "../utils/playRounds.js";

const NUMBER_OF_ROUND = 3;

const gameLogic = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = getRandomOperator();

    const { success, result, error } = calculate(randomNumber1, randomNumber2, randomOperator);

    if (!success) {
        console.error(`Error: ${error}`);
        return { question: "", correctAnswer: "" };
    }

    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    return { question, correctAnswer: result.toString() };
};

export const startCalcGame = () => {
    const userName = askUserName();
    console.log("What is the result of the expression?");
    playRounds(userName, NUMBER_OF_ROUND, gameLogic);
};
