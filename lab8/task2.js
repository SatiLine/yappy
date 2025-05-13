// Список API для демонстрации
const APIs = [
    'https://api.chucknorris.io/jokes/random',
    'https://api.adviceslip.com/advice',
    'https://dog-api.kinduff.com/api/facts',
    'https://meowfacts.herokuapp.com/',
    'https://randomuser.me/api/'
];

// 1. Базовая реализация с XHR и цепочкой событий
function xhrChainDemo() {
    const output = document.getElementById('output');
    output.innerHTML = '<h3>Результаты (XHR + коллбэки):</h3>';

    function makeRequest(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => callback(null, xhr.response);
        xhr.onerror = () => callback(new Error('Request failed'));
        xhr.send();
    }

    function handleResponse(index) {
        if (index >= APIs.length) return;
        
        makeRequest(APIs[index], (err, response) => {
            if (err) {
                console.error(`Error in request ${index + 1}:`, err);
                output.innerHTML += `<pre>Ошибка запроса ${index + 1}: ${err.message}</pre>`;
                return;
            }
            
            output.innerHTML += `<pre>API ${index + 1} response:\n${response}</pre>`;
            handleResponse(index + 1);
        });
    }

    handleResponse(0);
}

// 2. Функция request() с коллбэком
function request(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => callback(null, xhr.response);
    xhr.onerror = () => callback(new Error(`Request to ${url} failed`));
    xhr.send();
}

// 3. Функция requestPromise()
function requestPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

// 4. Реализация с промисами
function promiseDemo() {
    const output = document.getElementById('output');
    output.innerHTML = '<h3>Результаты (Промисы):</h3>';

    let chain = Promise.resolve();
    APIs.forEach((url, i) => {
        chain = chain.then(() => requestPromise(url))
            .then(response => {
                output.innerHTML += `<pre>API ${i + 1} response:\n${response}</pre>`;
            })
            .catch(err => {
                output.innerHTML += `<pre>Ошибка запроса ${i + 1}: ${err.message}</pre>`;
            });
    });
}

// 5. Реализация с async/await
async function asyncAwaitDemo() {
    const output = document.getElementById('output');
    output.innerHTML = '<h3>Результаты (Async/Await):</h3>';

    try {
        for (let i = 0; i < APIs.length; i++) {
            const response = await requestPromise(APIs[i]);
            output.innerHTML += `<pre>API ${i + 1} response:\n${response}</pre>`;
        }
    } catch (err) {
        output.innerHTML += `<pre>Ошибка: ${err.message}</pre>`;
    }
}
