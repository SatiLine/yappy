function processMatrix(matrix) {
    let sumOfMaxElementsInRows = 0;
    let productOfMinElementsInColumns = 1;
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // сумма наибольших элементов строк
    for (let i = 0; i < numRows; i++) {
        let maxInRow = matrix[i][0];
        for (let j = 1; j < numCols; j++) {
            if (matrix[i][j] > maxInRow) {
                maxInRow = matrix[i][j];
            }
        }
        sumOfMaxElementsInRows += maxInRow;
    }

    // произведение наименьших элементов столбцов
    for (let j = 0; j < numCols; j++) {
        let minInColumn = matrix[0][j];
        for (let i = 1; i < numRows; i++) {
            if (matrix[i][j] < minInColumn) {
                minInColumn = matrix[i][j];
            }
        }
        productOfMinElementsInColumns *= minInColumn;
    }

    return [sumOfMaxElementsInRows, productOfMinElementsInColumns];
}

const matrix = [
    [12, 78, 31],
    [54, 85, 96],
    [27, 48, 19]
];

const result = processMatrix(matrix);
const sumOfMaxInRows = result[0];
const productOfMinInColumns = result[1];
console.log("Сумма наибольших элементов строк:", sumOfMaxInRows);
console.log("Произведение наименьших элементов столбцов:", productOfMinInColumns);