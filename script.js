var todoInput = document.querySelector('.input');
var todoButton = document.querySelector('.button__add');
var todoList = document.querySelector('.list');
if (todoButton && todoList && todoInput) {
    todoButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteCheck);
}
function addTodo(event) {
    event.preventDefault();
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    var todoItem = document.createElement('div');
    todoItem.classList.add('todo__item');
    newTodo.appendChild(todoItem);
    var buttons = document.createElement('div');
    buttons.classList.add('container__buttons');
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(buttons);
    if (todoInput.value === "") {
        return null;
    }
    var completedButton = document.createElement('button');
    completedButton.appendChild(document.createTextNode("DON"));
    completedButton.classList.add('complete__button');
    buttons.appendChild(completedButton);
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("DEL"));
    deleteButton.classList.add('delete__button');
    buttons.appendChild(deleteButton);
    if (todoList) {
        todoList.appendChild(todoDiv);
    }
    todoInput.value = "";
}
function deleteCheck(e) {
    var item = e.target;
    var todo = item.parentElement.parentElement;
    if (item.classList.contains('delete__button') && todo) {
        todo.remove();
    }
    if (item.classList.contains('complete__button') && todo) {
        todo.classList.toggle("completedItem");
    }
}
