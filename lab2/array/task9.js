function findMedianOfTwoArrays(arr1, arr2) {
    // Объединение массивов
    let combinedArray = arr1.concat(arr2);

    // Сортировка массива
    combinedArray.sort((a, b) => a - b);

    // 3. Нахождение медианы
    const len = combinedArray.length;
    const isEven = len % 2 === 0;

    let median;
    if (isEven) {
        // Если четное количество элементов --> среднее арифметическое двух средних
        const mid1 = combinedArray[len / 2 - 1];
        const mid2 = combinedArray[len / 2];
        median = (mid1 + mid2) / 2;
    } else {
        // Если нечетное количество элементов, медиана - средний элемент
        median = combinedArray[Math.floor(len / 2)];
    }

    return median;
}


let arr1 = [1, 2, 5, 4, 6];
let arr2 = [8, 2, 5, 9, 5];

let medianValue = findMedianOfTwoArrays(arr1, arr2);
console.log("Медиана двух массивов:", medianValue);