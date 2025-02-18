let a = parseInt(prompt("Введите уменьшаемое: "));
let b = parseInt(prompt("Введите вычитаемое: "));

function subtraction(a, b) {
    let result = a - b;
    return result;
} 
document.write(subtraction(a, b));

function subtraction1(a, b) {
    document.write(a - b);
} 
subtraction1(a, b);

