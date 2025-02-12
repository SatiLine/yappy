let ravens = parseInt(prompt("Введите количество ворон: "));

switch (ravens) {
    case 1:
        document.write("На ветке сидит " + ravens + " ворона");
        break;
    case 2:
    case 3:
    case 4:
        document.write("На ветке сидит " + ravens + " вороны");
        break;
    default:
        if (ravens > 4 && ravens <= 10) {
            document.write("На ветке сидит " + ravens + " ворон")

        }
}