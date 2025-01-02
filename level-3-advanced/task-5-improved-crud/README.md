## Task 5: Enhance the CRUD application to store task data persistently using file I/O.

**Objective**: Implement file storage for tasks to enable saving and loading from a text file.

### Problem

MM: enhance the previous CRUD application I built in tast 3 to use file storage for tasks. It should save and load tasks from a text file, but I'll prefer to use a JSON file. 

Steps:
1. Modify the application to read and write
tasks to a text file.
2. Implement error handling for file
operations.
3. Test the persistence of task data.

### Examples and Data structures
As there is no example/test case provided, I assume that I'd need an array to store the data (in this tasks) in a separate file. For the tasks, I need to ask the user, so this will also be an interactive console-base application. 

As for the data structure, I'll need an array in my JSON file. 

### Algorithm

Create a task manager application that allows users to add, view, update, and delete tasks.

Define a function named `loadTasksFromFile` that takes no parameters.
1. Check if a file named `tasks.json` exists in the current directory using `fs.existsSync`.
2. If the file exists, read the file using `fs.readFileSync` and return the parsed JSON data.
3. If the file does not exist, return an empty array.
---
Define a function named `saveTasksToFile` that takes a single parameter `tasks`.
1. Write the tasks array to a file named `tasks.json` in the current directory.
2. Use `JSON.stringify` to convert the tasks array to a JSON string.
3. Use `fs.writeFileSync` to write the JSON string to the tasks.json file.
4. Use `null` and `2` as the second and third arguments to `JSON.stringify` to format the JSON string with 2 spaces.
---
Define a function named `addTask` that takes a single parameter `newTask`.
1. Load tasks from the file using `loadTasksFromFile`.
2. Add the new task to the tasks array.
3. Save the updated tasks array to the file using `saveTasksToFile`.
4. Log "Task added successfully!" to the console.
---
Define a function named `viewTasks` that takes no parameters.
1. Load tasks from the file using `loadTasksFromFile`.
2. If the tasks array is empty, log "No tasks found." to the console.
3. Otherwise, log "Current tasks:" to the console.
4. Iterate over the tasks array and log the task `ID`, `title`, `description`, and `status` to the console.
---
Define a function named `updateTask` that takes a single parameter `id`.
1. Load tasks from the file using `loadTasksFromFile`.
2. Find the task with the given `id` in the tasks array.
3. If the task does not exist, log "Task not found!" to the console and return.
4. Prompt the user to enter a new title and description for the task.
5. Update the task with the new title and description.
6. Save the updated tasks array to the file using `saveTasksToFile`.
7. Log "Task updated successfully!" to the console.
---
Define a function named `deleteTask` that takes a single parameter `id`.
1. Load tasks from the file using `loadTasksFromFile`.
2. Find the index of the task with the given `id` in the tasks array.
3. If the task does not exist, log "Task not found!" to the console and return.
4. Remove the task from the tasks array using `splice`.
5. Save the updated tasks array to the file using `saveTasksToFile`.
6. Log "Task deleted successfully!" to the console.
---
Define a function named `showMenu` that takes no parameters.
1. Log the following menu options to the console:
   "1. Add Task"
   "2. View Tasks"
   "3. Update Task"
   "4. Delete Task"
   "5. Exit"
2. Prompt the user to choose an option between 1 and 5.
3. Return the user's choice.
---
Define a function named `runProgram` that takes no parameters.
1. Create an infinite loop using `while (true)`.
2. Call the `showMenu` function to display the menu and get the user's choice.
3. Use a `switch` statement to perform the following actions based on the user's choice:
    - Call the `addTask` function when the user chooses option 1.
    - Call the `viewTasks` function when the user chooses option 2.
    - Call the `updateTask` function when the user chooses option 3.
    - Call the `deleteTask` function when the user chooses option 4.
    - Log "Exiting the application. Goodbye!" to the console and return when the user chooses option 5.
    - Log "Invalid choice. Please try again." to the console when the user chooses an invalid option.

4. Prompt the user to press Enter to continue and clear the console.
---

Call the `runProgram` function to start the task manager application.
---

### Explanation
This program is a command-line based Task Manager application written in JavaScript. It allows users to manage their tasks by performing CRUD (Create, Read, Update, Delete) operations. The tasks are stored in a JSON file (tasks.json), which makes it easy to read and write task data.

It has the following features:
- Add Task: Users can add a new task by providing an ID, title, and description.
- View Tasks: Users can view all the tasks currently stored in the JSON file.
- Update Task: Users can update an existing task by providing the task ID.
- Delete Task: Users can delete a task by providing the task ID.
- Exit: Users can exit the application.

**How it works**:
The program reads tasks from a JSON file (tasks.json) and displays a menu with options to add, view, update, delete tasks, or exit the application.

Based on the user's choice, the corresponding function is called to perform the desired operation.
The tasks are saved back to the JSON file after any modification.

**Changes Made**
After running ESLint against this program, it raise the error of too-many-statements not allowed in runProgram. I decided to move the code inside this function into additional helper functions such as, `handleAddTask` `handleUpdateTask`, and `handleDeleteTask`. The handle prefix is not obvious, however, these functions simply get input from user and invoke the correspondeing function to perform the required task.

**Usage**:
To run the program, use the following command:

```bash
node improved-crud.js
```

### Using JSON file
I used the JSON(JavaScript Standard Object Notation) file for this program, because it  naturally represents objects and arrays, making it easier to read and write structured data like tasks. It is also a widely used format for data storage and interchange. 

First, I initialized `tasks.json` with an empty array:

```json
[]
```

Second, the program reads the JSON file, parses it into an array, performs CRUD operations, and then writes the updated array back to the file. It does this using a bunch of methods and the `fs` node module for file I/O. 

### An example of What This File Will Look Like
```json
 {
   "id": 1,
    "title": "Write Code",
    "description": "Work on the CRUD application.",
    "status": "Completed",
  },
  {
    "id": 1,
    "title": "Write Code",
    "description": "Work on the CRUD application.",
    "status": "Pending",

  },
  {
    "id": 2,
    "title": "Read Book",
    "description": "Read a new book.",
    "status": "In Progress",

  },
  {
    "id": 3,
    "title": "Exercise",
    "description": "Go for a run.",
    "status": "Completed",

  },
  {
    "id": 4,
    "title": "Cook Dinner",
    "description": "Prepare a healthy meal.",
    "status": "Completed",

  },
  {
    "id": 5,
    "title": "Watch Movie",
    "description": "Watch a new movie.",
    "status": "Pending",

  }
```