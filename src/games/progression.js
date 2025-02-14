import { getRandomNumber } from "../utils/getRandomNumber.js";
import { getProgression } from "../utils/getProgression.js";
import { startGame } from "../utils/startGame.js";

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
    startGame(
        "What number is missing in the progression?",
        gameLogic
    );
};