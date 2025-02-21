import readlineSync from 'readline-sync';

const playRounds = (userName, remainingRounds, gameLogic) => {
  if (remainingRounds === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const { question, correctAnswer } = gameLogic();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    playRounds(userName, remainingRounds - 1, gameLogic);
    return;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export default playRounds;
