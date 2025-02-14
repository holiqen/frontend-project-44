import readlineSync from "readline-sync";

export const playRounds = (userName, remainingRounds, gameLogic) => {
    if (remainingRounds === 0) {
        console.log(`Congratulations, ${userName}!`);
        return;
    }

    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();

    if (userAnswer === correctAnswer) {
        console.log("Correct!");
        return playRounds(userName, remainingRounds - 1, gameLogic);
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
};