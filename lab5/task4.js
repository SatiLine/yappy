function delayedSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Both arguments must be numbers'));
            return;
        }

        setTimeout(() => {
            const sum = a + b;
            resolve(sum);
        }, 2000);
    });
}

function startSummation(initialA, initialB) {
    let count = 0;
    let currentA = initialA;
    const maxIterations = 5;
    let promiseChain = Promise.resolve();  

    for (let i = 0; i < maxIterations; i++) {
        promiseChain = promiseChain.then(() => {
            return delayedSum(currentA, initialB)
                .then(sum => {
                    count++;
                    console.log(`Iteration ${count}: Sum = ${sum}`);
                    currentA = sum; 
                    return sum; 
                })
                .catch(error => {
                    console.error(`Error on iteration ${i + 1}:`, error.message);
                    throw error; 
                });
        });
    }

    promiseChain.then(() => {
        console.log('Summation process completed.');
    }).catch(() => {
    });
}

// Успешный вызов функции
console.log('Successful summation:');
startSummation(5, 3);

// Ошибочный вызов функции
setTimeout(() => {
    console.log('\nErroneous summation:');
    startSummation(5, 'not-a-number');
}, 12000); 
