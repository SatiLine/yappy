function Rabbit() {}
Rabbit.prototype = {
eats: true
};
let rabbit = new Rabbit();
console.log(rabbit.eats); // true

// Изменение прототипа
// Rabbit.prototype = {};
// console.log(rabbit.eats);  // undefined

/* Изменение прототипа функции-конструктора (Rabbit.prototype = {}) не влияет на существующие объекты (rabbit).
Свойства, добавленные к прототипу до создания объекта, остаются доступными для объекта,
но новые изменения прототипа не распространяются на существующие объекты. */

// Изменение свойства прототипа
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats); // false

/* Изменение свойства прототипа (Rabbit.prototype.eats = false) влияет на все объекты, которые наследуют от этого прототипа,
включая существующие объекты (rabbit). Поскольку свойство eats не существует в объекте rabbit,
JavaScript ищет его в прототипе и возвращает измененное значение. */

// Удаление свойства из объекта
// delete rabbit.eats;
// console.log(rabbit.eats); // true 

/* Свойство eats не существует в объекте rabbit, поэтому оператор delete не удаляет ничего.
При обращении к rabbit.eats, JavaScript ищет это свойство в прототипе (Rabbit.prototype) и возвращает значение true. */

// Удаление свойства из прототипа
// delete Rabbit.prototype.eats;
// console.log(rabbit.eats); // undefined

/* Удаление свойства из прототипа (delete Rabbit.prototype.eats) влияет на все объекты, которые наследуют от этого прототипа.
Поскольку свойство eats больше не существует в прототипе, JavaScript не находит его ни в объекте, ни в прототипе и возвращает undefined. */