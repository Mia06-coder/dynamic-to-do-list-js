// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => {
      addTask(taskText, false); // false = don't save again
    });
  }

  // Save tasks to Local Storage
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add task to DOM and optionally save to Local Storage
  function addTask(taskText, save = true) {
    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove task from DOM and update Local Storage
    removeButton.onclick = () => {
      taskList.removeChild(listItem);

      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = tasks.filter((task) => task !== taskText);
      saveTasks(updatedTasks);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Save task to local storage if needed
    if (save) {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      if (!tasks.includes(taskText)) {
        tasks.push(taskText);
        saveTasks(tasks);
      }
    }
  }

  // Add new task from input
  function handleAddTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Enter task!");
      return;
    }

    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (existingTasks.includes(taskText)) {
      alert("Task already exists!");
      return;
    }

    addTask(taskText); // Defaults to save = true
    taskInput.value = "";
    taskInput.focus();
  }

  // Add task on button click
  addButton.addEventListener("click", handleAddTask);

  // Add task on Enter key press
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  });

  // Initial load
  loadTasks();
});
