let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));

function Calculator() {
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read(a, b);
console.log(calculator.sum());
console.log(calculator.mul());