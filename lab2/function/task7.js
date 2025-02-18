function calculateNthTerm(n) {
    if (n === 1) {
        return 1;
    }

    // Вычисляем предыдущий член
    const previousTerm = calculateNthTerm(n - 1);
    
    // Суммируем все предыдущие члены
    let sumOfPreviousTerms = previousTerm;
    if (n > 2) {
        sumOfPreviousTerms += calculateSumOfPrevious(n - 1);
    }
    
    // Возвращаем синус суммы предыдущих членов
    return Math.sin(sumOfPreviousTerms);
}

// Вспомогательная функция для вычисления суммы всех предыдущих членов
function calculateSumOfPrevious(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += calculateNthTerm(i);
    }
    return sum;
}

console.log(calculateNthTerm(5));