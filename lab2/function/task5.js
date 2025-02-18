let x = parseFloat(prompt("Введите x: "));
let y = parseFloat(prompt("Введите y: "));
let z = parseFloat(prompt("Введите z: "));

function calculateU(x, y, z) {
    let u = (Math.max(x, y) + Math.max(x + y, z)) / Math.pow(Math.max(0.5, x + z), 2);
    console.log(u);
}
calculateU(x, y, z);
