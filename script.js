// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// functions
function addTodo(event) {
  // preventdefault.
  event.preventDefault();

  // tododiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // createLI
  const createTodo = document.createElement("Li");
  createTodo.innerText = todoInput.value;
  createTodo.classList.add("todo-item");
  todoDiv.appendChild(createTodo);

  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //   append to list
  todoList.appendChild(todoDiv);

  // clear todo-input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Deleting todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    // todo.appendChild.add();
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }
  // checkmark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
