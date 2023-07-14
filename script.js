let inputText = document.getElementById('typeText');
let ulList = document.getElementById('ulList');
let send = document.getElementById('send');
let clear = document.getElementById('clear');

//создать список задач
send.onclick = function createTask(evt) {
if (inputText.value === '') {
  let span = document.getElementById('warning');
  span.textContent = 'Задачи отсутствуют'
  clear.disabled = 'true';
} else {
  let li = document.createElement('li');
  let task = typeText.value;
  li.textContent = task;
  ulList.appendChild(li);

  //сохранить список в LocalStorage

  //добавить пробел и ; в отображении
  localStorage.setItem('task', `${ulList.textContent};`);

  clear.style = 'background-color: orange';
}
}

clear.onclick = function clearTasks(evt) {
  ulList.removeChild(li);
  localStorage.removeItem('task');
  
}