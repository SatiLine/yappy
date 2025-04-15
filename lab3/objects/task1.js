// let user = {}; -- создаем пустой объект

// добавляем свойства name и surname
let user = {
    name: "John",
    surname: "Smith"
};

// изменяем значение свойства name на Pete
user.name = "Pete"; 

console.log(user.name);

// Удаляем свойство name из объекта
delete user.name;

console.log(user);
