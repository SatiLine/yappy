async function readConfigPromise(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded');
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

async function doQueryPromise(statement) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

async function httpGetPromise(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

async function readFilePromise(path) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded');
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Вызов функций в строгой последовательности с async/await
async function main() {
    console.log('start');

    await readConfigPromise('myConfig');
    await doQueryPromise('select * from cities');
    await httpGetPromise('http://google.com');
    await readFilePromise('README.md');

    console.log('It is done!');
    console.log('end');
}

main();
