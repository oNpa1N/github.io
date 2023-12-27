//Создаю пустой массив
let plans = [];
//Функция для записи введенего текста в локально хранилище
function setPlans() {
    let str = document.getElementById('str').innerHTML;
    let punct = document.getElementById('input_plan').value;
    if (punct != ''){
        plans.push(punct);
        for(i = 0; i < plans.length; i++){
            saveAll(1, plans);
            document.getElementById('input_plan').value ='';
            //str.insertAdjacentHTML("beforebegin", `<li class="h1" id="str">${plans[i]}</li>`);
        }   
    }else{
        alert('Введите пунт')
    }
}
//Функция вывода информации на сайт

function getPlans(){
    document.getElementById('str').innerHTML = getAll(1);
    document.getElementById('input_plan').value ='';
    
}
//Очистка поля вывода
function clearPlans() {
    document.getElementById('str').innerHTML='';
    document.getElementById('input_plan').value ='';
}

function editPunct() {
    if(plans[0] == undefined){
        alert('Данных для изменения нет');
    }
    else{
        alert(edit(1,prompt('Введите пункт который хотите изменить начиная с 0',''), prompt("Введите изменения","")));
        document.getElementById('str').innerHTML = getAll(1);
        document.getElementById('input_plan').value ='';
    }
    
}



//Очистка плана
function allclearPlans(){
    localStorage.removeItem(1);
    plans = [];
    document.getElementById('str').innerHTML='';
    document.getElementById('input_plan').value ='';
}



//Вспомогательный Блок функций для добавления массива в локальное хранилище
//Сохранить в локальное хранилище
function saveAll(id, data){
    localStorage.setItem(id,JSON.stringify(data));
}
//Вывести из локального хранилища
function getAll(id){
    let json = localStorage.getItem(id);
    return JSON.parse(json);
}
//Вывести определенный элемент массива из локального хранилища
function get(id, key){
    let arr = getAll(id);
    if(arr[key] != undefined){
        return arr[key];
    }
    else{
        return null;
    }
}
//Изменение элемента массива в локальном хранилище 
function edit(id, key, newValue){
    let arr = getAll(id);
    arr[key] = newValue; 
    saveAll(1, arr);
}