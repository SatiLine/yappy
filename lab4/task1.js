function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function askPassword(login, password, success, failure) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    
    // Приведение к нижнему регистру
    const loginLower = login.toLowerCase();
    const passwordLower = password.toLowerCase();

    // Проверка гласных в пароле
    const passwordVowels = Array.from(passwordLower).filter(c => vowels.has(c));
    const vowelError = passwordVowels.length !== 3;

    // Извлечение согласных из логина и пароля
    const loginConsonants = Array.from(loginLower).filter(c => !vowels.has(c));
    const passwordConsonants = Array.from(passwordLower).filter(c => !vowels.has(c));
    const consonantError = !areArraysEqual(loginConsonants, passwordConsonants);

    // Определение типа ошибки
    if (vowelError && consonantError) {
        failure(login, "Everything is wrong");
    } else if (vowelError) {
        failure(login, "Wrong number of vowels");
    } else if (consonantError) {
        failure(login, "Wrong consonants");
    } else {
        success(login);
    }
}

function main(login, password) {
    function success(l) {
        console.log(`Привет, ${l}!`);
    }
    function failure(l, msg) {
        console.log(`Кто-то пытался притвориться пользователем ${l}, но в пароле допустил ошибку: ${msg.toUpperCase()}`);
    }
    askPassword(login, password, success, failure);
}

// Тестирование
main("login", "aaalgn");  // Привет, login!
main("login", "luagon");  // Привет, login!
main("login", "aaa");     // Ошибка: "EVERYTHING IS WRONG"
main("login", "aaaalgn"); // Ошибка: "WRONG NUMBER OF VOWELS"