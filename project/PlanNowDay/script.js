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
    if(plans[1] == undefined){
        alert('Планов нет');
    }
    else{
        for(i = 1; i < plans.length; i++){
            alert(`${i}. ${plans[i]}`);
        }
    }
}
function Clear(){
    document.getElementById('input1').value ='';
    
}
function ClearDay(){
    plans = ['']; 
}
