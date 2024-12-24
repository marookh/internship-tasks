const readline = require("readline-sync");
const prompt = (msg) => console.log(`=> ${msg}`);
const printWelcomeMessage = () => prompt(`Welcome to Gussing Number Game!`);
const printGoodbyeMessage = () => {
  console.clear();
  prompt(`Thanks for playing! Have a great Day!`);
};

const displayRules = (rule) => prompt(rule);

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getValidInput = () => {
  let input = readline.question();
  while (Number.isNaN(Number(input)) || input.trim() === "") {
    prompt("Invalid input. Please enter a valid number:");
    input = readline.question();
  }
  return Number(input);
};

const giveHint = (hint, attemptsLeft) => {
  console.clear();
  prompt(hint);
  prompt(`You have ${attemptsLeft} ${attemptsLeft > 1 ? "attempts" : "attempt" } left.`);
};

function playAgain() {
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (!["y", "n"].includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer === "y") {
    console.clear();
    return true;
  } else {
    return false;
  }
}

const RANDOM_NUM = generateRandomNumber();
let counter = 5;
let userAnswer;

printWelcomeMessage();
prompt("I've generated a random number between 1-100.");
displayRules(`You have ${counter} total attempts to guess the number.`);

do {
  while (counter > 0) {
    prompt("Guess the secret number");
    userAnswer = getValidInput();
    counter--;

    if (userAnswer > RANDOM_NUM) {
      if (counter > 0) {
        giveHint("Too high!", counter);
      }
    } else if (userAnswer < RANDOM_NUM) {
      if (counter > 0) {
        giveHint("Too low!", counter);
      }
    } else {
      console.clear();
      prompt("You guessed the correct number! Congratulations!");
      break;
    }
  }

  if (counter === 0 && (userAnswer !== RANDOM_NUM)) {
    console.clear();
    prompt("You ran out of attempts! The correct number was " + RANDOM_NUM);
  }

  counter = 5;
} while (playAgain());

printGoodbyeMessage();
