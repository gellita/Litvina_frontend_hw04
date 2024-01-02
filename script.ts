const todoInput: HTMLInputElement | null = document.querySelector('.input');
const todoButton: HTMLButtonElement | null = document.querySelector('.button__add');
const todoList: HTMLUListElement | null = document.querySelector('.list');

if (todoButton && todoList && todoInput) {
    todoButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteCheck);
}

function addTodo(event: Event) {
    event.preventDefault();
    const todoDiv: HTMLDivElement = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo: HTMLLIElement = document.createElement('li');
    newTodo.innerText = (todoInput as HTMLInputElement).value;
    const todoItem: HTMLDivElement = document.createElement('div');
    todoItem.classList.add('todo__item');
    newTodo.appendChild(todoItem);
    const buttons: HTMLDivElement = document.createElement('div');
    buttons.classList.add('container__buttons');
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(buttons);

    if ((todoInput as HTMLInputElement).value === "") {
        return null;
    }

    const completedButton: HTMLButtonElement = document.createElement('button');
    completedButton.appendChild(document.createTextNode("DON"));
    completedButton.classList.add('complete__button');
    buttons.appendChild(completedButton);

    const deleteButton: HTMLButtonElement = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("DEL"));
    deleteButton.classList.add('delete__button');
    buttons.appendChild(deleteButton);

    if (todoList) {
        todoList.appendChild(todoDiv);
    }

    (todoInput as HTMLInputElement).value = "";
}

function deleteCheck(e: Event) {
    const item: HTMLElement = e.target as HTMLElement;
    const todo: HTMLDivElement | null = (item.parentElement as HTMLDivElement).parentElement as HTMLDivElement;

    if (item.classList.contains('delete__button') && todo) {
        todo.remove();
    }
    if (item.classList.contains('complete__button') && todo) {
        todo.classList.toggle("completedItem");
    }
}
