/* когда вызывается rabbit.eat(), свойство full будет добавлено к объекту rabbit, а не к объекту animal. 
Потому, что контекст this внутри метода eat() указывает на объект,
 на котором был вызван метод, в данном случае — rabbit. */

 let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();
  
  console.log(rabbit.full); // true
  console.log(animal.full); // undefined

/* Контекст this: В методе eat() контекст this указывает на объект, на котором был вызван метод. 
Поскольку метод был вызван на rabbit, this будет указывать на rabbit.
Добавление свойства: Свойство full добавляется к объекту rabbit, а не к animal.
Вывод свойств: После вызова rabbit.eat(), свойство full существует только в объекте rabbit, а в объекте animal оно отсутствует */