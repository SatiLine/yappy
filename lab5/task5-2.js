async function f1(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x * x;
            console.log(`f1(x) = ${x}^2 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

async function f2(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = 2 * x;
            console.log(`f2(x) = 2*${x} = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

async function f3(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = -2;
            console.log(`f3(x) = -2 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

async function f4(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x / 2;
            console.log(`f4(x) = ${x}/2 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

async function f5(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x * x * x;
            console.log(`f5(x) = ${x}^3 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

async function f6(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = x + 1;
            console.log(`f6(x) = ${x} + 1 = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

async function calculateF(x, functions, name) {
    let result = 0;

    for (const func of functions) {
        const value = await func(x);
        result += value;
        console.log(`Промежуточный результат для ${name}: ${result}`);
    }

    console.log(`Пример ${name}: F(x) = ${result}`);
}

async function main() {
    console.log('Пример a. n = 2');
    await calculateF(3, [f1, f2], 'a');

    console.log('\nПример b. n = 4');
    await calculateF(3, [f1, f2, f3, f4], 'b');

    console.log('\nПример c. n = 6');
    await calculateF(3, [f1, f2, f3, f4, f5, f6], 'c');

    console.log('Все примеры завершены');
}

main();
