const readline = require("readline-sync");

function convertTemperature(temp, direction) {
  if (direction === "CtoF") {
    return (((temp * 9) / 5) + 32);
  } else if (direction === "FtoC") {
    return (((temp - 32) * 5) / 9);
  }
  return null;
}

function clear() {
  console.clear();
}

console.log("Welcome to the Temperature Converter!");
while (true) {
  let temperature = Number(readline.question("Enter the temperature: "));
  while (Number.isNaN(temperature)) {
    clear();
    console.log("Invalid input. Please enter a valid number.");
    temperature = Number(readline.question("Enter the tempreture: "));
  }

  clear();
  console.log("Choose conversion direction:");
  console.log("1. Celsius to Fahrenheit");
  console.log("2. Fahrenheit to Celsius");
  let choice = readline.question("Enter 1 or 2: ");

  if (choice === "1") {
    let fahrenheit = convertTemperature(temperature, "CtoF");
    console.log(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
  } else if (choice === "2") {
    let celsius = convertTemperature(temperature, "FtoC");
    console.log(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
  } else {
    clear();
    console.log("Invalid choice. Please select either 1 or 2.");
    continue;
  }

  let again = readline.question("Do you want to convert another temperature? (y/n): ").toLowerCase();
  if (!["y", "Y"].includes(again)) {
    clear();
    console.log("Thank you for using the Temperature Converter! Goodbye!");
    break;
  }

  clear();
}