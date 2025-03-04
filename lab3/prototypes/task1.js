let animal = {
    jumps: null
    };
    let rabbit = {
    __proto__: animal,
    jumps: true
    };
    /* значение True
    смотрим свойство в самом объекте rabbit 
    => оно существует => возвращает True */
    console.log(rabbit.jumps); // ? (1) True => Свойство найдено в объекте rabbit
    /* Оператор delete удаляет только собственные свойства объекта
    => свойство jumps удаляется из объекта rabbit */
    delete rabbit.jumps;
    /* значение null
    После удаления собственного свойства jumps из объекта rabbit, JavaScript ищет это свойство в прототипе объекта, 
    которым является animal.
    В прототипе (animal) свойство jumps существует и равно null. */
    console.log(rabbit.jumps); // ? (2) null => Свойство найдено в прототипе (animal)
    /* Оператор delete удаляет только собственные свойства объекта
    => свойство jumps удаляется из объекта animal */ 
    delete animal.jumps;
    /* значение undefined
    После удаления свойства jumps из объекта animal,
    это свойство больше не существует ни в объекте rabbit, 
    ни в его прототипе.
    => свойство не существует => возвращается undefined */
    console.log(rabbit.jumps); // ? (3) undefined => Свойство удалено из прототипа, и больше нигде не существует