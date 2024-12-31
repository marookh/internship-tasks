## Task 4: Build a temperature converter program.

**Objective**: Enable users to input temperatures
and choose the conversion direction between
Fahrenheit and Celsius.
Steps:
1. Design a program to accept temperature
input.
2. Implement logic for temperature conversion.
3. Allow users to choose the conversion
direction.
4. Test the program with different input values.

### PEDAC: Understand the problem

**Mintal Model**: Create a program to convert temperatures between Fahrenheit and Celsius based on user input.

### Rules/requirements: 
- See the description

### Examples
- N/A

### Data structures
As this program is primarily dealing with string and numbers, we don't need any other data structure such as array or object. 
---

### Algorithm:

1. **Start the Program**:
   - Display a welcome message to the user.
   - Explain the purpose of the program.

2. **Input Temperature and Conversion Direction**:
   - Prompt the user to enter a temperature value.
   - Validate the input to ensure it's a number.
   - Ask the user to choose the conversion direction:
     1. Celsius to Fahrenheit.
     2. Fahrenheit to Celsius.

3. **Temperature Conversion Logic**:
   - Use the appropriate formula based on the chosen direction:
     - **Celsius to Fahrenheit**:
       \[
       F = C \times \frac{9}{5} + 32
       \]
     - **Fahrenheit to Celsius**:
       \[
       C = (F - 32) \times \frac{5}{9}
       \]
   - Perform the conversion.

4. **Display the Result**:
   - Show the converted temperature with an appropriate label (e.g., "°F" or "°C").

5. **Repeat or Exit**:
   - Ask the user if they want to perform another conversion.
   - If yes, repeat from Step 2.
   - If no, display a goodbye message and exit the program.

6. **Test the Program**:
   - Test with various inputs:
     - Valid numeric inputs for both directions.
     - Edge cases like `0°C`, `32°F`, or large values.
     - Invalid inputs (e.g., non-numeric values).

---

### Run the code
```bash
node weather-converter.js
```
### Example Output:
Welcome to the Temperature Converter!
Enter the temperature: 20

Choose conversion direction:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter 1 or 2: 

20°C is equal to 68.00°F
Do you want to convert another temperature? (y/n): n

Thank you for using the Temperature Converter! Goodbye!

### Description
This is a simple command-line application that converts temperatures between Celsius and Fahrenheit. 
It uses the `readline-sync` library to interact with the user.

The `convertTemperature` function takes a `temp`, a number representing tempreture and a `direction` as the arguments. It converts the temprature according to the value of `direction` from Celsius to Fahrenheit or vice versa and returns it. 

The `clear()` function does not take any arguments, nor it returns any explicit value. It simply clears the console using the built-in `console.clear()` method. 

Essentially, the main program works in a way that it first displays a welcome message. Then it enters a generic loop to repeatedly prompt the user for temperature conversions. It prompts the user to inter a temperature, validates the input to ensure it is a number. It then prompts the user to choose the conversion direction (Celsius to Fahrenheit or Fahrenheit to Celsius). Subsequently, it performs the conversion and displays the result.


Finally, the program asks the user if they want to convert another temperature. It clears the console and repeats the process if the user wants to continue, otherwise exits the program.