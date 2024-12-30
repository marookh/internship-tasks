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
1. Define a Task Class:

 - Create a Task class with the following attributes:
  id (unique identifier for each task)
  name (the name/title of the task)
  description (details about the task)
  status (e.g., "Pending", "Completed").

2. Create a TaskManager class:
 - Create an empty array, tasks, to store task objects.
- Include a variable to generate unique IDs for tasks.

3. Main Application Menu:
- Display a menu with options for the user:
  Create a new task.
  View all tasks.
  Update a task.
  Delete a task.
  Exit the application.
  Prompt the user to choose an option.
4. Handle User Input:
- Based on the user's choice, perform the corresponding CRUD operation:
 - Create:
  Prompt the user for task details (title, and initial status).
  Generate a unique ID for the task.
  Create a new Task object and add it to the tasks array.
- Read:
  Loop through the tasks array.
  Display each task's ID title, and status.
- Update:
  Prompt the user for the id of the task to update.
  Find the task in the tasks array.
  If the task exists:
   Prompt the user for updated details (e.g., new, title, or status or priority).

  Update the task’s attributes.
  If the task does not exist, inform the user.
- Delete:
  Prompt the user for the id of the task to delete.
  Find the task in the tasks array.
  If the task exists, remove it from the array.
  If the task does not exist, inform the user.
- Repeat or Exit:

  After completing an operation, return to the main menu.
  If the user chooses to exit, display a goodbye message and terminate the application.

- Test the Application:

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