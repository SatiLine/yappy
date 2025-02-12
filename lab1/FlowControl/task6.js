let x = parseFloat(prompt("Введите х: "));
let y = parseFloat(prompt("Введите y: "));

let result = 1;

while (y > 0) {
    result *= x;
    y--;
}

console.log(result);