// Добавление свойства по умолчанию к встроенному объекту
String.prototype.color = "black"; 
// Добавление свойства size
String.prototype.size = 20;

// Добавление (изменение) метода к встроенному объекту
String.prototype.write = stringWrite;
function stringWrite(){
    console.log("Текст: " + this.toString())
    console.log("Цвет текста: " + this.color);
    console.log("Размер шрифта: " + this.size);
}
// используем измененный класс
let s = new String("Это строка");
s.color = "red";
s.size = 24;
s.write();

let s2 = new String("Вторая строка");
s2.write();
