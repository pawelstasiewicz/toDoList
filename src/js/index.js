const editBtn = document.querySelectorAll('.editBtn');
const editAreaBtn = document.querySelector('.editAreaBtn');
const editArea = document.querySelector('.editArea');
const taskInputValue = document.querySelector('.taskInputValue');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskArea = document.querySelector('.taskArea ul');
const errorInfo = document.querySelector('.errorInfo');
const editInput = document.querySelector('.editInput');
let newTask;
let editedTask;
const editErrorr = document.querySelector('.editErrorr');

const main = () => {
	prapareDOMEvents();
};

const prapareDOMEvents = () => {
	addTaskBtn.addEventListener('click', addTask);
	taskArea.addEventListener('click', checkClick);
	editAreaBtn.addEventListener('click', changeToDoTask);
	taskInputValue.addEventListener('keyup', enterTask);
};

const addTask = () => {
	if (taskInputValue.value === '') {
		errorInfo.textContent = 'You must write something';
		errorInfo.style.color = 'red';
	} else if (taskInputValue.vlaue !== '') {
		newTask = document.createElement('li');
		newTask.textContent = taskInputValue.value;
		taskArea.append(newTask);

		createBtnArea();

		taskInputValue.value = '';
		errorInfo.textContent = '';
	}
};

const createBtnArea = () => {
	const btnArea = document.createElement('div');
	btnArea.classList.add('liBtn');
	newTask.append(btnArea);

	const btnEdit = document.createElement('button');
	btnEdit.classList.add('editBtn');
	btnEdit.textContent = 'Edit';

	const btnDelete = document.createElement('button');
	btnDelete.classList.add('deleteBtn');
	btnDelete.textContent = 'Delete';

	btnArea.append(btnEdit, btnDelete);
};

const checkClick = (e) => {
	if (e.target.matches('.editBtn')) {
		editTask(e);
	} else if (e.target.matches('.deleteBtn')) {
		deleteTask(e);
	}
};

const editTask = (e) => {
	editedTask = e.target.closest('li');
	editInput.value = editedTask.firstChild.textContent;
	editErrorr.textContent = '';
	editArea.classList.toggle('active');
};

const changeToDoTask = () => {
	if (editInput.value !== '') {
		editedTask.firstChild.textContent = editInput.value;
	} else {
		editErrorr.textContent = 'You must write something';
	}
};

const deleteTask = (e) => {
	e.target.closest('li').remove();
};

const enterTask = (e) => {
	if (e.key === 'Enter') {
		addTask();
	}
};

document.addEventListener('DOMContentLoaded', main);
