let arr = [1, 2, 3];

console.log("Элемент с индексом 2:", arr[2]);
console.log("Количество элементов в массиве:", arr.length);
arr.splice(1, 1); // удаление второго  элемента индекса

document.write("Оставшиеся элементы массива: " + "</br>");
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "</br>");
}