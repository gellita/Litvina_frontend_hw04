const todoInput = document.querySelector('.input');
const todoButton = document.querySelector('.button__add');
const todoList = document.querySelector('.list');
const filterOption = document.querySelector('.filter_todo');

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


function addTodo(event) {

    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo__item');
    newTodo.appendChild(todoItem);
    const buttons = document.createElement('div');
    buttons.classList.add('container__buttons');
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(buttons);

    if(todoInput.value === ""){
        return null
    }


    const completedButton = document.createElement('button');
    completedButton.appendChild(document.createTextNode("DON"));
    completedButton.classList.add('complete__button');
    buttons.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("DEL"));
    deleteButton.classList.add('delete__button');
    buttons.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = ""
}


function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "delete__button") {
        const todo = item.parentElement;
        todo.remove()

    }
    if (item.classList[0] === "complete__button") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}