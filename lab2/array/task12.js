let arr = [78, -40, 2, -53, 3, -12, -9, 17];

function modifyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && i % 2 !== 0) {
            arr[i] *= 3;
        }
        else if (arr[i] < 0 && i % 2 === 0) {
            arr[i] /= 5;
        }
    }
}

// Пример использования

modifyArray(arr);
console.log("Измененный массив:", arr);