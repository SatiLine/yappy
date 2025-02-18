function printElementsInInterval(matrix, minInterval, maxInterval) {
    console.log("Элементы матрицы в интервале [" + minInterval + "; " + maxInterval + "]:");
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= minInterval && matrix[i][j] <= maxInterval) {
                console.log("Элемент [" + i + "][" + j + "] = " + matrix[i][j]);
            }
        }
    }
}

let matrix = [
    [-7, 10, 2, -1, 41],
    [63, -35, 0, 92, -5],
    [19, -56, 5, 12, -2],
    [-4, 7, -25, 3, 11],
    [21, -8, 41, -5, 64]
];

console.log("Исходная матрица:");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
}

printElementsInInterval(matrix, -5, 7);