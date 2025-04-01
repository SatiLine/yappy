function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}
function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}
function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}
function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

// // Создание оберток для функций с использованием промисов
// function readConfigPromise(name) {
//     return new Promise(resolve => readConfig(name, resolve));
// }
// function doQueryPromise(statement) {
//     return new Promise(resolve => doQuery(statement, resolve));
// }
// function httpGetPromise(url) {
//     return new Promise(resolve => httpGet(url, resolve));
// }
// function readFilePromise(path) {
//     return new Promise(resolve => readFile(path, resolve));
// }

// Вызов функций с использованием коллбэков
console.log('start')
readConfig('myConfig', () => {
    doQuery('select * from cities', () => {
        httpGet('http://google.com', () => {
            readFile('README.md', () => {
                console.log('It is done with callbacks!')
                
                console.log('end');
            })
        })
    })
})

/* Вызов функций с использованием промисов
readConfigPromise('myConfig')
    .then(() => doQueryPromise('select * from cities'))
    .then(() => httpGetPromise('http://google.com'))
    .then(() => readFilePromise('README.md'))
    .then(() => {
        console.log('It is done with promises!');

        console.log('end');
    }) */