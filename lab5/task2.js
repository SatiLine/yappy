function readConfigPromise(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded');
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function doQueryPromise(statement) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function httpGetPromise(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function readFilePromise(path) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded');
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Вызов функций в строгой последовательности
console.log('start');

readConfigPromise('myConfig')
    .then(() => doQueryPromise('select * from cities'))
    .then(() => httpGetPromise('http://google.com'))
    .then(() => readFilePromise('README.md'))
    .then(() => {
        console.log('It is done!');
        console.log('end');
    });
