# Task 1: Guessing Number Game

Note: for this program and all other in this project, I used the PEDAC process to build them. 

## P: Understand the problem
Develop a basic text-based game.
Implement a simple game using conditional statements for game logic.

For this task, I considered building a simple yet fun to use game. It is the Gussing Number game, where the user attempts to guess a randomely generated number. The user can do so in a specified number of attemps, and a given range.

### Steps:

1.Choose a game type (quiz, guessing game).
2.Define the game rules and logic.
3.Use conditional statements to manage game flow.
4.Test and debug the game for correctness.

### Basic Rules:
- The computer generates a random number (e.g., between 1 and 100).
- The user tries to guess the number by typing inputs.
- After each guess, the program tells the user if their guess is:
  Too high,
  Too low, or
  Correct!
- The game continues until the user guesses the number correctly or runs out of attempts.

For example:
Implement a console application for basic CRUD operations on a list of tasks.

---

## Data Structure
- String

## Algorithm (High level):
Start: Display a welcome message and explain the rules.
Random Number: Generate the secret number.
Welcome user: Print a welcome message.
Display rules: Disply the game rules and the number of attempts. 
User Input: Prompt the player to enter a guess.
Feedback: Use conditional statements to check if the guess is correct, too high, or too low, and display appropriate messages.
Repeat: Continue until the correct guess is made or the user runs out of attempts.
End: Congratulate the player and ask if they want to play again.

## Code
- See the guess-number.js file
---
## Explanation
For this task, I opted for the Procedural Programming paradigm for two main reasons: first, there was no specific guidance on which model to use, and second, the current game is small. This makes Procedural Programming a suitable choice.

The program flow is controlled using a series of `if` statements, which allows for straightforward decision-making. To improve clarity and structure, I extracted some reusable code into functions. I also used arrow function syntax for its compactness, which helps keep the code concise. Additionally, I used loops to facilitate repeated execution of certain tasks within the game.
---
## How to Run
1. Clone or download the repository.
2. Navigate to the folder:  
   ```bash
   cd Internship-Tasks/level-1-biginner/task-1-game

### Run the following node command:
```bash
  node guess-number.js
```

### Run throug ESLint:
Note: You need to have ESlint installed, and have configuration file to see the appropriate output for the following command.
```bash
npx eslint guess-number.js
```
ESlint reported no issue!

### Example output:
=> Welcome to Gussing Number Game!
=> I've generated a random number between 1-100.
=> You have 5 total attempts to guess the number.
=> Guess the secret number:
44
=> Too high!
=> You have 4 attempts left.
=> Guess the secret number:
10
=> Too low!
=> You have 3 attempts left.
=> Guess the secret number:
10
=> Too high!
=> You have 2 attempts left.
=> Guess the secret number:
54
=> Too high!
=> You have 1 attempt left.
=> Guess the secret number:
30
=> You ran out of attempts! The correct number was 20
=> Do you want to play again? (y/n)
yee
=> Please enter 'y' or 'n'.
n
=> Thanks for playing! Have a great Day!
