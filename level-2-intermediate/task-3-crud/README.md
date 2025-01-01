## Task 3: Create a console application for basic CRUD operations on a list of tasks.


### PEDAC: Understand the Proble
**Objective**: Implement Create, Read, Update, and
Delete operations using arrays or lists for data
storage.
Steps:
1. Define a Task class with necessary attributes.
2. Implement functionality to create a new task.
3. Develop a method to read and display tasks.
4. Allow users to update task details.
5. Provide an option to delete tasks.
6. Test the application with various scenarios.

### Examples & Data Structure
- Object: It will be created by instantiating the Task class.
- Array: to store the tasks objects



### Algorithm 

Create a TaskManager class that has the following methods:
- createTask(): creates a new task and adds it to the tasks list.
- readTasks(): displays all the tasks in the tasks list.
- updateTask(): updates a task in the tasks list.
- deleteTask(): deletes a task from the tasks list.
- countTask(): returns the number of tasks created.
- listSize(): returns the number of tasks in the tasks list.
- toString(): returns a string representation of the tasks list.
- forEach(callback): iterates over the tasks list and calls the callback function for each task.
- add(task): adds a task to the tasks list.

The TaskManager class should have the following properties:
- tasks: an array to store tasks.
- taskIdCounter: a counter to keep track of the number of tasks created.

---
Create a Task class that represents a task with the following methods:
- constructor(id, title, status, priority): initializes the task with the given id, title, status, and priority.

The Task class should have the following properties:
- id: a unique identifier for the task.
- title: the title of the task.
- status: the status of the task (default is "Pending").
- priority: the priority of the task (default is "").
---

Use the TaskManager class main function that displays a menu with the following options:
1. Create Task
2. View Tasks
3. Update Task
4. Delete Task
5. Exit
---
The main function should:
- take user input to perform the corresponding action based on the menu option selected.
- continue to display the menu until the user chooses to exit the application.
- clear the console after each menu option is selected.
- display appropriate messages to the user based on the action performed.
- handle invalid input from the user and display an error message.
- call the corresponding methods of the TaskManager class based on the menu option selected.
- be called at the end of the script to start the application.

The TaskManager class and the main function should be implemented in the same file.
---
Verify the application works as expected:
  Create tasks.
  Read and display all tasks.
  Update task details.
  Delete tasks.
  Test edge cases (e.g., invalid inputs, deleting non-existent tasks).

### Run the code
```bash
node crud-tasks.js
```
### Description
In this application, I built a simple console-based task manager to perform basic CRUD (Create, Read, Update, Delete) operations. The program allows us to manage a list of tasks efficiently using arrays (in this case) for data storage. To achieve this, we defined a `Task` class, as solicited, with attributes like task `id`, `title`, `priority`, and `status`.

First, I implemented functionality to create new tasks and store them in a list. Next, I added methods to read and display all tasks neatly in the console. After that, we provide users with the ability to update task details, like renaming a task or changing its status. Finally, we  include an option to delete tasks when they are no longer needed.

Moreover, the I overridden the `toString` method to ensure proper representaion of the task details. Additionally, we have a constumized version of `forEach` to iterate through tasks. The reason I defined `listSize`, and `add` to get the lenght of the `tasks` array and add a new task to it is that it ensures data integrity by allowing the user to only work with interface. This means that the `tasks` array will not be accessed directly. 

To ensure everything works correctly, I tested the application with different scenarios, such as creating multiple tasks, updating them, and verifying that tasks can be deleted properly. Now, we have a fully functional task management application that showcases how CRUD operations can be implemented using JavaScript.