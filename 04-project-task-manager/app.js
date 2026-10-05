// Getting the input event form

const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

// Adding event listener to the form
taskForm.addEventListener("submit", (event) => {
  
  event.preventDefault(); // Prevent the default form submission behavior

  const taskInput = document.getElementById("task-input");

  const task = taskInput.value;
  console.log(task);

}); 

 