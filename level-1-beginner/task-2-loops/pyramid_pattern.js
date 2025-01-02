const readline = require("readline-sync");

function incrementingNumbers(rows) {
  let result = [];

  for (let i = 1; i <= rows; i += 1) {
    let padding = " ".repeat(rows - i);
    let numbers = "";

    for (let j = 1; j <= i; j += 1) {
      numbers += j + " ";
    }
    result.push(padding + numbers.trim());
  }

  return result.join("\n");
}

function symmetricalNumbers(rowCount) {
  let result = [];

  for (let i = 1; i <= rowCount; i += 1) {
    let padding = " ".repeat(rowCount - i);
    let increasingNums = "";
    let decreasingNums = "";

    for (let j = 1; j <= i; j += 1) {
      increasingNums += j;
    }

    for (let d = i - 1; d > 0; d -= 1) {
      decreasingNums += d;
    }

    result.push(padding.concat(increasingNums, decreasingNums));
  }

  return result.join("\n");
}

function validateChoice(choice) {
  if (choice !== "1" && choice !== "2") {
    console.log("Invalid choice. Please restart the program; select 1 or 2.");
    return null;
  }

  return true;
}

function validateRowNumber(num) {
  if (Number.isNaN(num) || num <= 0) {
    console.log("Invalid input. Please restart the program; enter a positive number.");
    return null;
  }
  return true;
}

function main() {
  console.clear();
  console.log("Number Pattern Generator");
  console.log("1. Incrementing Pyramid Pattern");
  console.log("2. Symmetrical Pyramid Pattern");

  const choice = readline.question("Choose the type of pattern (1 or 2): ");
  const rows = parseInt(readline.question("Enter the number of rows: "), 10);
  validateChoice(choice);
  validateRowNumber(rows);
  console.log("\nGenerated Pattern:");
  if (choice === "1") {
    console.log(incrementingNumbers(rows));
  } else if (choice === "2") {
    console.log(symmetricalNumbers(rows));
  }

  console.log("\nTask Completed!");
}

main();