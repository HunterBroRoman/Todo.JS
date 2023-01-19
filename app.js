function createTodoItem (title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // меняем тип инпута
    checkbox.classList.add ='checkbox';//cсоздаем класс

    const label = document.createElement('label');
    label.innerText = title;
    label.classList.add('title');
    
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classList.add('textfield');

    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.classList.add('edit');

    const deleteButton = document.createElement('button');
    editButton.innerText = 'Удалить';
    editButton.classList.add('delete');

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
console.log(listItem);
    return listItem;

}

function addTodoItem(event) {
event.preventDefault();

if(addInput.value === '') return alert('Необходимо ввести название задачи');
// если поле пустое делается алерт

const listItem = createTodoItem(addInput.value);    
}



const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);

