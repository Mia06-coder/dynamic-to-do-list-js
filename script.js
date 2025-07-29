// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input value

    // Check if input is empty
    if (taskText === "") {
      alert("Enter task!");
      return;
    }

    // Create new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Append button to list item, then list item to task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", () => {
    addTask();
    taskInput.focus(); // Optional: focus input after adding
  });

  // Add task on pressing Enter key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      addTask();
    }
  });
});
