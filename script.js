// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(event) {
  // preventdefault.
  event.preventDefault();

  // tododiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // createLI
  const createTodo = document.createElement("Li");
  createTodo.innerText = "hey babe";
  createTodo.classList.add("todo-item");
  todoDiv.appendChild(createTodo);

  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-light fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-light fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);

  //    append to list
  // todoList.appendChild(todoDiv) ;
}
