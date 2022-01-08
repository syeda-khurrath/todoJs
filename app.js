const addTodoForm = document.querySelector(".addTodo");
const todos = document.querySelector(".todos");
const search = document.querySelector(".searchForm input");
const generateTemp = (todo) => {
  const html = `
    <li class="list-group-item list-group-item-dark list-item " >
          <p >${todo}</p>
          <button class="btn btn-danger material-icons delete ">delete</button>
        </li>
    `;
  todos.innerHTML += html;
};

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addTodoForm.add.value.trim();
  if (todo.length) {
    generateTemp(todo);
    addTodoForm.reset()
  }
});

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("hide"));
  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("hide"));
};

search.addEventListener("keyup", () => {
  let term = search.value.trim().toLowerCase();
  filterTodos(term);
});
