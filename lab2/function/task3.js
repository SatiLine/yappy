let a = parseInt(prompt("Введите первое число: "));
let b = parseInt(prompt("Введите второе число: "));
let c = parseInt(prompt("Введите третье число: "));

function checkNumber(a, b, c){
    if (a >= b && a >= c){
        return document.write('Наибольшее число: ', a);  
    }
    else if (b >= a && b >= c){
        return document.write('Наибольшее число: ', b);
    }
    else {
        return document.write('Наибольшее число: ', c);
    }
}

checkNumber(a, b, c);