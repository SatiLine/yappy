function f1(x, callback) {
    setTimeout(() => {
        const result = x * x;
        console.log(`f1(x) = ${x}^2 = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f2(x, callback) {
    setTimeout(() => {
        const result = 2 * x;
        console.log(`f2(x) = 2*${x} = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f3(x, callback) {
    setTimeout(() => {
        const result = -2;
        console.log(`f3(x) = -2 = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f4(x, callback) {
    setTimeout(() => {
        const result = x / 2;
        console.log(`f4(x) = ${x}/2 = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f5(x, callback) {
    setTimeout(() => {
        const result = x * x * x;
        console.log(`f5(x) = ${x}^3 = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f6(x, callback) {
    setTimeout(() => {
        const result = x + 1;
        console.log(`f6(x) = ${x} + 1 = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

// Вычисление F(x) с использованием коллбэков
function calculateF(x, functions, name, callback) {
    let result = 0;
    let index = 0;

    function next() {
        if (index >= functions.length) {
            console.log(`Пример ${name}: F(x) = ${result}`);
            callback();
            return;
        }

        const func = functions[index];
        func(x, (value) => {
            result += value;
            console.log(`Промежуточный результат для ${name}: ${result}`);
            index++;
            next();
        });
    }

    next();
}

// Примеры работы программы
console.log('Пример a. n = 2');
calculateF(3, [f1, f2], 'a', () => {
    console.log('\nПример b. n = 4');
    calculateF(3, [f1, f2, f3, f4], 'b', () => {
        console.log('\nПример c. n = 6');
        calculateF(3, [f1, f2, f3, f4, f5, f6], 'c', () => {
            console.log('Все примеры завершены');
        });
    });
});