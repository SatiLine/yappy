let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read(a, b);
console.log(calculator.sum());
console.log(calculator.mul());
