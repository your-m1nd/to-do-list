let inputText = document.getElementById('typeText');
let ulList = document.getElementById('ulList');
let noTasks = document.getElementById('noTasks')
let send = document.getElementById('send');
let clear = document.getElementById('clear');

window.onload = function () {
  //обработчик события загрузки страницы
if (localStorage.getItem('task')== null) {
  //проверка наличия сохраненных задач в LocalStorage
  noTasks.style = 'display: block'; //показать элемент "Нет задач"
  clear.disabled = true; //отключить кнопку "Очистить"
} else {
  noTasks.style = 'display: none'; //скрыть элемент "Нет задач"
  ulList.style = 'display: block'; //показать список задач
  clear.disabled = false; //включить кнопку "Очистить"
  let tasks = JSON.parse(localStorage.getItem('task')); //получить список задач из LocalStorage
  tasks.forEach((task) => {
    //для каждой задачи из списка 
    let li = document.createElement('li'); //создать элемент списка
    li.textContent = task.text; //установить текст задачи
    ulList.appendChild(li); //добавить элемент в список
    let checkbox = document.createElement('input'); //создать элемент чекбокса
    checkbox.setAttribute('type', 'checkbox'); //установить тип "чекбокс"
    checkbox.checked = task.done; //установить значение чекбокса
    li.appendChild(checkbox); //добавить чекбокс в элемент списка 
  })
}
};

send.onclick = function createTask(evt) {
  //обработчик события клика по кнопке "Отправить"
  if (inputText.value === "") {
    let span = document.getElementById('warning');
    span.textContent = "Задачи отсутствуют"; 
    clear.disabled = true; //отключить кнопку "Очистить"
  } else {
    noTasks.style = 'display: none'; //скрыть элемент "Нет задач"
    ulList.style = 'display: block'; //показать список задач
    let li = document.createElement('li'); //создать элемент списка
    let task = inputText.value; //получить текст задачи из поля ввода
    li.textContent = task; // установить текст задачи
    ulList.appendChild(li); //добавить элемент в список
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    li.appendChild(checkbox);
    inputText.value = '';
    clear.disabled = true;
    let tasks = localStorage.getItem('task') === null ? [] : JSON.parse(localStorage.getItem('task')); //получить список задач из Local Storage
    tasks.push({text: task, done: false}); //добавить новую задачу в список
    localStorage.setItem('task', JSON.stringify(tasks)); //сохранить список задач в Local Storage
    clear.style = 'background-color: #ffc0cb';
  }
};

clear.onclick = function clearTasks(evt) {
  //обработчик события клика по кнопке "Очистить"
  localStorage.removeItem('task'); //очистить список задач из Local Storage
  ulList.style = 'display: none'; //скрыть список задач
  clear.style = 'background-color: blanchedalmond';
  noTasks.style = 'display: block';
  clear.disabled = false;
  while (ulList.firstChild) {
    ulList.removeChild(ulList.firstChild); //удалить все элементы списка
  }
};



/*//создать список задач
send.onclick = function createTask(evt) {
if (inputText.value === '') {
  let span = document.getElementById('warning');
  span.textContent = 'Задачи отсутствуют'
  clear.disabled = true;
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
*/

