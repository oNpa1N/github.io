function onSubmit() {
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    let input3 = Number(document.getElementById('input3').value); 
    if(input1 == 0 && input2 == 0 && input3 == 0){
         alert('Быть такого не может, введите что нибудь кроме нулей');
    }
    else if(input1 >= -10000 && input2 >= -10000 && input3 >= -10000){
        let D = input2**2 - 4 * input1 * input3;
        D > 0 ? alert(`Уровнение имеет два корня первый корень: ${(-1 * input2 - Math.sqrt(D))/ 2 * input1} второй корень: ${(-1 * input2 + Math.sqrt(D))/ 2 * input1}`) : 
        (D == 0 ? alert(`Уровнение имеет один действительный корень ${-1 * input2 / 2 * input1}`) : 
        (D < 0 ? alert('Уровнение не имеет корней'): alert('')));
    }
    else{
        alert('Данные введены некорректно');
    }
}
function onClear() {
    let input1 = Number(document.getElementById('input1').value = '');
    let input2 = Number(document.getElementById('input2').value = '');
    let input3 = Number(document.getElementById('input3').value = ''); 
}