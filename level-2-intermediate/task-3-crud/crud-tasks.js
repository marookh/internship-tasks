const readline = require("readline-sync");

class Task {
  constructor(id, title, status = "Pending", priority = "") {
    this.id = id;
    this.title = title;
    this.status = status;
    this.priority = priority;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskIdCounter = 0;
  }

  createTask() {
    console.clear();
    const title = readline.question("Enter task title: ");
    const prio = readline.question("Enter task priority: ");

    const task = new Task(this.countTask(), title, prio);
    this.add(task);
    console.log("Task created successfully!\n");
  }

  readTasks() {
    console.clear();
    console.log("\nCurrent Tasks:");
    if (this.listSize() === 0) {
      console.log("No tasks available.\n");
      return;
    }
    this.toString();
    console.log("");
  }

  updateTask() {
    console.clear();
    const id = parseInt(readline.question("Enter task ID to update: "), 10);
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      console.log("Task not found!\n");
      return;
    }

    const newTitle = readline.question("Enter new title: ");
    const newStatus = readline.question("Enter new status (Pending/Completed): ");
    const newPriority = readline.question("Enter new priority (Low/Medium/High): ");

    task.title = newTitle || task.title;
    task.status = newStatus || task.status;
    task.priority = newPriority || task.priority;

    console.clear();
    console.log("Task updated successfully!\n");
  }

  deleteTask() {
    console.clear();
    const id = parseInt(readline.question("Enter task ID to delete: "), 10);
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      console.log("Task not found!\n");
      return;
    }

    this.tasks.splice(index, 1);
    console.log("Task deleted successfully!\n");
  }

  countTask() {
    this.taskIdCounter += 1;
    return this.taskIdCounter;
  }

  listSize() {
    return this.tasks.length;
  }

  toString() {
    this.forEach(task => {
      console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
    });
  }

  forEach(callback) {
    this.tasks.forEach(callback);
  }

  add(task) {
    this.tasks.push(task);
  }
}

function showMenu() {
  console.log("1. Create Task");
  console.log("2. View Tasks");
  console.log("3. Update Task");
  console.log("4. Delete Task");
  console.log("5. Exit");
}

function getChoice() {
  return parseInt(readline.question("Choose an option: "), 10);
}

// Error "max-lines-per-function" disabled for main function:

function main() {
  console.clear();
  const manager = new TaskManager();

  while (true) {
    showMenu();
    const choice = getChoice();

    switch (choice) {
      case 1:
        manager.createTask();
        break;
      case 2:
        manager.readTasks();
        break;
      case 3:
        manager.updateTask();
        break;
      case 4:
        manager.deleteTask();
        break;
      case 5:
        console.clear();
        console.log("Goodbye!");
        break;
      default:
        console.log("Invalid choice, try again!\n");
    }
  }
}

main();