import { getRandomNumber } from "../utils/getRandomNumber.js";
import { askUserName } from "../utils/askUserName.js";
import { playRounds } from "../utils/playRounds.js";
import { getProgression } from "../utils/getProgression.js";

const NUMBER_OF_ROUND = 3;

const gameLogic = () => {
    const progression = getProgression();
    const hiddenIndex = getRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hiddenIndex].toString();

    const questionProgression = progression.map((num, index) =>
        index === hiddenIndex ? ".." : num
    ).join(" ");


    return {
        question: `${questionProgression}`,
        correctAnswer
    };
};

export const startProgressionGame = () => {
    const userName = askUserName();
    console.log("What number is missing in the progression?");
    playRounds(userName, NUMBER_OF_ROUND, gameLogic);
};