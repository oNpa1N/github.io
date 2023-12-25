let plans = [''];
function Click(){
    let plan = document.getElementById('input1').value;
    if(plan == ''){
        alert('Вы неможете добавить пустой пункт');
    }
    else{
        plans.push(plan);
    } 
}
function Show(){
    let str = document.getElementById('str');
    if(plans[1] == undefined){
        alert('Планов нет');
    }
    else{
        for(i = 0; i < plans.length; i++){
            str.insertAdjacentHTML("beforebegin", `<li class="h1" id="str">${plans[i]}</li>`)
        }
    }
}
function Clear(){
    document.getElementById('input1').value ='';
    document.getElementById('d').innerHTML="<ul><li class='h1' id='str'></li></ul>";
}
function ClearDay(){
    plans = [''];
    document.getElementById('input1').value ='';
    document.getElementById('d').innerHTML="<ul><li class='h1' id='str'></li></ul>";
}