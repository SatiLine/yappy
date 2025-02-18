let age = parseInt(prompt("Введите возраст: "));

function greetByAge(age) {
    if (age < 18) {
        return document.write('Привет, малыш!');
    } else {
       return document.write('Здравствуйте, юноша!');
    }
} 

greetByAge(age);