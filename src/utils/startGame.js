import { askUserName } from "./askUserName.js";
import { playRounds } from "./playRounds.js";

const NUMBER_OF_ROUND = 3;

export const startGame = (description, gameLogic) => {
    const userName = askUserName();
    console.log(description);
    playRounds(userName, NUMBER_OF_ROUND, gameLogic);
};
