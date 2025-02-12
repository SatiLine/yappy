let age = parseInt(prompt("Введите число: "));

if (age > 0) {
    if (age < 18) {
        document.write("Для детей");
    }
    else if ( 18 <= age && age <= 30) {
        document.write("Для молодежи");
    }
    else {
        document.write("Для всех возрастов");
    }
}
