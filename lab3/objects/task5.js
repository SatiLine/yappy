let numeric = {
    a: 100,
    b: 200,
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
};

console.log(multiplyNumeric(numeric));
