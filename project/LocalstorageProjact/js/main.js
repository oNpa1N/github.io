//Находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

// .addEventListener эта приписка выполняет функцию("второй аргумент"), прослушивает событие ("первый аргумент")
//Добавление задачи
form.addEventListener('submit', addTask)
//Удаление задачи
tasksList.addEventListener('click', deleteTask)
//Отмечаем задачу завершенной
tasksList.addEventListener('click', doneTask)
//Создаем массив для сохраниения в localstoreg
let tasks = [];
//выводим из локального хранилища
if (localStorage.getItem('tasks')){
    //С помощью parse из JSON файла превращаем обратно в масив
    tasks = JSON.parse(localStorage.getItem('tasks'));
    //forEach метод позваляет обойти массив и вызвать функцию
    tasks.forEach( (task) => renderTask(task)) //рендерим задачу на страницу
}

checkEmptyList();

//Функция добвления
function addTask(event) {
    //Отменяем отправку формы
    event.preventDefault();

    //Домставляем текст задачи из поля ввода
    const taskText = taskInput.value 
    //создаем объкт для работы с данными (для локального хранилища)
    const newTask = {
        //Date.now - При создание новой задачи id будет новый
        id: Date.now(),
        text: taskText,
        done: false,
    };
    //Добавляем задачу в массив сзадачами
    tasks.push(newTask);
    //рендерим задачу на страницу
    renderTask(newTask);

    //Очищаем поля ввода и делаем фокус на него
    taskInput.value = '';
    //Фокус
    taskInput.focus();


    checkEmptyList();
    saveAll();
}
//Функция удаление
function deleteTask(event) {
    //Проверяем что клик был по кнопке удалить задачу
    //event.TARGET определяет по какому объекту был произведен клик
    //Обращаемся к data-action, прописанному в HTML, чтобы к нему обратиться нужно использовать Dataset
    //Если клик не по делете данная функция заканчивает свою работу с помощью return
    if (event.target.dataset.action != 'delete') return;
        
        

    //через closest нахордим родителя кнопки то есть li 
    const parantNode =  event.target.closest('.list-group-item');
    //определяем id задачи
    const id = Number(parantNode.id);
    //находим индекс в массиве
    //findIndex позвозяет находить по индексам. Прописываем стрелочную функцию Она имеет одну строчку сл-но может пропистать в одну строку
    const index =  tasks.findIndex((task) => task.id === id); //=> true / false);
    //splice Позваляет вырезать из массива определенные данные по индексу(первый аргумент) и определенное количество раз (второй аргумент)
    tasks.splice(index,1);
    //удаляем задачу li
    parantNode.remove();

    checkEmptyList();
    saveAll();
}
//Функция отметки задачи
function  doneTask(event) { 
    //Проверяем что клик был по кнопке задача выполнена
    //Если клик не по делете данная функция заканчивает свою работу с помощью return
    if (event.target.dataset.action != 'done') return;
        
    //через closest нахордим родителя кнопки то есть li 
    const parantNode =  event.target.closest('.list-group-item');

    const id = Number(parantNode.id);
    //он возвращает найденый элемент
    const task = tasks.find( (task) => task.id === id) //=> true / false);
    //переворачиваем значение для правильности выполнения
    task.done = !task.done

    //Находим в родителе элемент span по классу task-title
    const taskTitle= parantNode.querySelector('.task-title');
    //Приписываем к классу подкласс task-title--done через classList.toggle
    //toggle - Позваляет добавлять подкласс по клику если его нет и по вотрому клику его убирать если он есть 
    taskTitle.classList.toggle('task-title--done')     

    saveAll();
}

function checkEmptyList() {
    //Проверям есть ли в массиве задачи
    if (tasks.length === 0){
        const emptylistHTML = `<li id="emptyList" class="list-group-item empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<div class="empty-list__title">Список дел пуст</div>
				</li>`;
        tasksList.insertAdjacentHTML('afterbegin', emptylistHTML);

    }


    if(tasks.length > 0){
        //ищем элемент 
        const emptylistl = document.querySelector('#emptyList');
        emptylistl ? emptylistl.remove() : null;
    }
}

//Вспомогательный Блок функций для добавления массива в локальное хранилище
//Сохранить в локальное хранилище
function saveAll(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//рендерим задачу на страницу
function renderTask(task) {
    //используем тернарный оператор if и формируемм CSS класс
    const cssClass = task.done ? 'task-title task-title--done' : 'task-title';
    
    //Формируем разметку для новой задачи 
    const taskHTML = `
    <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
        <span class="${cssClass}">${task.text}</span>
        <div class="task-item__buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
        </div>
    </li>`;

    //Добавляем задачу на страницу
    tasksList.insertAdjacentHTML("beforeend",taskHTML);
}