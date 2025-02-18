let arr = [1, 54, 51, 23];

function swapMinMax(arr) {
    // индекс минимального элемента
    let minIndex = arr.indexOf(Math.min(...arr));
  
    // индекс максимального элемента
    let maxIndex = arr.indexOf(Math.max(...arr));
  
    // Меняем элементы местами
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
}
  
  swapMinMax(arr);
  console.log("Массив после замены:", arr);