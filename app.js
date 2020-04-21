const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");


const createListItem = text => {
    // create li
    const li = document.createElement('li');
    // give li a class
    li.className = 'collection-item';
    // put the text in the li
    li.appendChild(document.createTextNode(text));
    // create a (link)
    const link = document.createElement('a');
    // give link a class
    link.className = 'delete-item secondary-content';
    // insert icon into link
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // insert/append link into li
    li.appendChild(link);
    // insert/append li into taskList
    taskList.appendChild(li);
}

const addTask = e => {
  if (taskInput.value === "") return alert("Please add a task");
  createListItem(taskInput.value);
  taskInput = "";
  e.preventDefault();
}

const loadEventListeners = () => {
  form.addEventListener("submit", addTask);
}

loadEventListeners();
