function pushArrayRandom(array){
    min = Math.ceil(Number(document.getElementById("input1").value));
    max = Math.floor(Number(document.getElementById("input2").value));
    if(min>max){
        return alert(`Не может быть min больше чем max`)
    }else{
        for(i = 0; i<array.length; i++){
        array[i] = parseInt(Math.random()*(max-min) + min)
        }
        return array
    }
    
}
function isEven(num){
    return num % 2 == 0
}

function showArrayToConsole(array){
    console.log(array)
}

function showArrayToDocument(array){
    document.getElementById("print").innerHTML = String(array);
}

function amountEvenInArray(array){
    counter = 0;
    for(i = 0; i < array.length; i++){
        if(isEven(array[i])){
            counter++
        }
    }
    return counter
}

function Click(){
    max = Number(document.getElementById("input2").value);
    min = Number(document.getElementById("input1").value);
    length = Number(document.getElementById("input3").value);
    array = Array(length);
    if(length > 0 && Number.isInteger(max) && Number.isInteger(min)){
        pushArrayRandom(array)
        console.log(amountEvenInArray(array))
        showArrayToDocument(array)
    }
    else{
        alert(`Данные введены некорректно`)
    }
}
function Clear(){
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
    document.getElementById("input3").value = '';
    document.getElementById("print").innerHTML='';
}
