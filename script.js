let inputText = document.getElementById('text');
let ulList = document.getElementById('list');

function createTask() {
    if (inputText.value === '') {
        alert('Напиши задачу');
    } 
    else {
        let li = document.createElement('li');
        li.textContent = inputText.value;
        ulList.appendChild('li');
    }
}

//function saveTasks() {
  //  localStorage.setItem('task', ulList.innerHTML);
//};

//function showTask() {
  // ulList.innerHTML = localStorage.getItem('task');
//};

//showTask();