const fs = require("fs");
const readline = require("readline-sync");

function loadTasksFromFile() {
  if (fs.existsSync("tasks.json")) {
    const data = fs.readFileSync("tasks.json", "utf8");
    return JSON.parse(data);
  } else {
    return [];
  }
}

function saveTasksToFile(tasks) {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

function addTask(newTask) {
  const tasks = loadTasksFromFile();
  tasks.push(newTask);
  saveTasksToFile(tasks);
  console.log("Task added successfully!");
}

function viewTasks() {
  const tasks = loadTasksFromFile();
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Current tasks:");
    tasks.forEach(task => {
      console.log(`ID: ${task.id} | Title: ${task.title} | Description: ${task.description} | Status: ${task.status}`);
    });
  }
}

function updateTask(id) {
  const tasks = loadTasksFromFile();
  const task = tasks.find(task => task.id === id);
  if (!task) {
    console.log("Task not found!");
    return;
  }

  const newTitle = readline.question(`Enter new title (Current: ${task.title}): `);
  const newDescription = readline.question(`Enter new description (Current: ${task.description}): `);
  task.title = newTitle || task.title;
  task.description = newDescription || task.description;
  saveTasksToFile(tasks);
  console.log("Task updated successfully!");
}

function deleteTask(id) {
  let tasks = loadTasksFromFile();
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    console.log("Task not found!");
    return;
  }
  tasks.splice(taskIndex, 1);
  saveTasksToFile(tasks);
  console.log("Task deleted successfully!");
}

function showMenu() {
  console.log("\n--- Task Manager ---");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Update Task");
  console.log("4. Delete Task");
  console.log("5. Exit");

  const choice = readline.questionInt("Please choose an option (1-5): ");
  return choice;
}

function handleAddTask() {
  const id = readline.questionInt("Enter task ID: ");
  const title = readline.question("Enter task title: ");
  const description = readline.question("Enter task description: ");
  const status = readline.question("Enter task status (Completed/Pending): ");
  addTask({ id, title, description, status });
}

function handleUpdateTask() {
  const updateId = readline.questionInt("Enter task ID to update: ");
  updateTask(updateId);
}

function handleDeleteTask() {
  const deleteId = readline.questionInt("Enter task ID to delete: ");
  deleteTask(deleteId);
}

function runProgram() {
  while (true) {
    const choice = showMenu();

    switch (choice) {
      case 1:
        handleAddTask();
        break;
      case 2:
        viewTasks();
        break;
      case 3:
        handleUpdateTask();
        break;
      case 4:
        handleDeleteTask();
        break;
      case 5:
        console.clear();
        console.log("Exiting the application. Goodbye!");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }

    readline.question("\nPress Enter to continue...");
    console.clear();
  }
}

runProgram();