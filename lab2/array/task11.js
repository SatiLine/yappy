let arr1 = [5, 12, 78, 54];
let arr2 = [9, 8, 7, 6, 5];

function checkAndReverseArray(arr) {
    let isSortedDescending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isSortedDescending = false;
            console.log("Нарушение порядка на индексе:", i + 1);
            return;
        }
    }
    console.log("Массив в обратном порядке:", arr.reverse());
}

checkAndReverseArray(arr1);
checkAndReverseArray(arr2);