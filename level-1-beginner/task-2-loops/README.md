## Task 2: Generate and print simple number patterns.

### Objective: 
Utilize loops to control the structure of number patterns.
Steps:
1. Select a number pattern type (e.g.,
pyramid).
2. Develop a program to generate the
selected pattern.
3. Use loops to control the structure of the
pattern.
4. Verify the correctness of the generated
pattern.


### Understand the Problem:
Mental Model: Build a program that generates and prints simple
number patters such as pyramid. Use loops to control the flow and structure
of the program. I assume that we only need to generate simple increasingNums pattern. 
After building the program, verify that it works as intended. 

Note: As there are no maximum guidance for this task, I decide to choose multiple pyramid
patterns and create test cases of my own. With that being said, I would specify the input as a number.

**Input**: Number (arrow)
**Output**:  String digits (array coerced to string)


Qs: 
Do I create test suite for the last step of verification? 
I can do that. However, I can verify it visually in console. 
Do I build a console-based program? 
Yes. Since the task didn't specify it as a web-based, I'd love to create a console-based one. 

### Data structure:
An array to store the rows. 

### High level steps:

1. Initialize `readline` to readline-sync module
2. Write separate functions for each pyramid pattern.
  a. Generate simple Incremental number pattern
  b. Generate Symmetrical number pattern
5. Prompt the user to choose the pattern
6. Handle invalid choice and number accordingly
7. Implement an option to set the number of rows for the pyramid. It should be a number.
8. Print the pyramid pattern according to the rows to the console. 


Algorithm
---------------
Helper func: incrementalNumbers(rows)
0. Initialize an empty result array

1. Iterate through numbers starting from 1- rows inclusive
 - Initialize `padding` to the space repeated rows - `i` times (decreasing the spaces)
 - Initialzie `increasingNums` to an empty space -> for space between digits

 - Loop through numbers from 1 - `j` inclusive
   - Concatenate `increasingNums` with current iterator + " "
 - Append `padding` + `increasingNums` to `result`-> without space in both start and end
 
2. Return result joined back into a string

----------------
Helper func: repeatedincreasingNums(rowsCount)
0. Initialize an empty result array.

1. Loop through increasingNums from 1 up to `rowsCount` inclusive
 - Initialize `spaces` to the space repeated rows - `i` size decreasing the spaces
 - Append `i` repeated `i` times to `result`
2. Return result joined back into a string
----------------

*/

### Example Outputs:
Option 1: Incrementing Pyramid Pattern
Input: `rows = 5`

```js
        1
       1 2
      1 2 3
     1 2 3 4
    1 2 3 4 5
```

Option 2: Symmetrical Pyramid Pattern
Input: `rows = 5`

```js
        1
       121
      12321
     1234321
    123454321
```

### Description
In the `main` function, the program asks the user to select either the "Incrementing Pyramid" or the "Symmetrical Pyramid" by entering 1 or 2. After the user chooses, they are prompted to enter the number of rows. If the input is invalid (non-numeric or ≤0), the program gracefully terminates with an error message.

Additionally, depending on the user's choice, the corresponding function either `incrementingNumbers` or `symmetricalNumbers` is executed to generate the desired pattern.

Moreover, if the user inters an invalid choice or input, we check that using the `validateChoice` and `validateNumber` helper functions. These two functions, when invoked, also terminate the `main` function if the user inputs an invalid value by returning `null`. Otherwise, the program generates and displays the pattern on the console for the user to verify. 

P.S: I've ESlint through the program and it raised no error. 