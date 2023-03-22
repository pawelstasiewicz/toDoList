//Edit
const editBtn = document.querySelectorAll('.editBtn');
const editArea = document.querySelector('.editArea');
//Add task
const taskInputValue = document.querySelector('.taskInputValue');
const addTaskBtn = document.querySelector('.addTaskBtn');
//Task area
const taskArea = document.querySelector('.taskArea ul');
const errorInfo = document.querySelector('.errorInfo');
let newTask;

const main = () => {
	prapareDOMEvents();
};

const prapareDOMEvents = () => {
	editBtn.forEach((btn) => {
		btn.addEventListener('click', editFunction);
	});

	addTaskBtn.addEventListener('click', addTask);
};

const addTask = () => {
	if (taskInputValue.value === '') {
		errorInfo.textContent = 'You must write something';
		errorInfo.style.color = 'red';
	} else if (taskInputValue.vlaue !== '') {
		newTask = document.createElement('li')
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

const editFunction = () => {
	editArea.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', main);
