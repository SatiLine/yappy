let arr = ['c', 5, 2, 'b', 3, 1, 4, 'a'];

arr.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    }
    if (typeof a === 'number' && typeof b === 'string') {
        return -1; // Числа идут перед строками
    }
    // Если a - строка, а b - число
    return 1; // Строки идут после чисел
});

console.log(arr);