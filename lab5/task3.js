function f1(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x * x;
            console.log(`f1(x) = ${x}^2 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f2(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = 2 * x;
            console.log(`f2(x) = 2*${x} = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f3(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = -2;
            console.log(`f3(x) = -2 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f4(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x / 2;
            console.log(`f4(x) = ${x}/2 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f5(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x * x * x;
            console.log(`f5(x) = ${x}^3 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f6(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x + 1;
            console.log(`f6(x) = ${x} + 1 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function calculateF(x, functions, name) {
    let result = 0;

    return functions.reduce((promise, func, index) => {
        return promise.then(() => func(x).then(value => {
            result += value;
            console.log(`Промежуточный результат для ${name}: ${result}`);
        }));
    }, Promise.resolve()).then(() => {
        console.log(`Пример ${name}: F(x) = ${result}`);
    });
}

console.log('Пример a. n = 2');
calculateF(3, [f1, f2], 'a').then(() => {
    console.log('\nПример b. n = 4');
    calculateF(3, [f1, f2, f3, f4], 'b').then(() => {
        console.log('\nПример c. n = 6');
        calculateF(3, [f1, f2, f3, f4, f5, f6], 'c').then(() => {
            console.log('Все примеры завершены');
        });
    });
});
