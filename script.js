let inputText = document.getElementById('typeText');
let ulList = document.getElementById('ulList');
let noTasks = document.getElementById('noTasks')
let send = document.getElementById('send');
let clear = document.getElementById('clear');

//создать список задач
send.onclick = function createTask(evt) {
if (inputText.value === '') {
  let span = document.getElementById('warning');
  span.textContent = 'Задачи отсутствуют'
  clear.disabled = 'true';
} else {
  noTasks.style = 'display: none';
  let li = document.createElement('li');
  let task = typeText.value;
  li.textContent = task;
  ulList.appendChild(li);
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  li.appendChild(checkbox);
  //очистить поле ввода задачи
  inputText.value = '';

  //сохранить список в LocalStorage
  localStorage.setItem('task', `${ulList.textContent}`);
  clear.style = 'background-color: #ffc0cb';
}
}

//удалить список задач
clear.onclick = function clearTasks(evt) {
  localStorage.clear();
  ulList.style = 'display: none';
  clear.style = 'background-color: blanchedalmond';
  noTasks.style = 'display: block';
}