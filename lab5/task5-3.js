async function delayedSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const sum = a + b;
            resolve(sum);
        }, 2000);
    });
}

async function startSummation(initialA, initialB) {
    let count = 0;
    let currentA = initialA;
    const maxIterations = 5;

    try {
        for (let i = 0; i < maxIterations; i++) {
            const sum = await delayedSum(currentA, initialB);
            count++;
            console.log(`Iteration ${count}: Sum = ${sum}`);
            currentA = sum;
        }
        console.log('Summation process completed.');
    } catch (error) {
        console.error(`Error occurred:`, error.message);
    }
}

// Успешный вызов функции
console.log('Successful summation:');
startSummation(5, 3);

// Ошибочный вызов функции
setTimeout(() => {
    console.log('\nErroneous summation:');
    startSummation(5, 'not-a-number');
}, 12000);
