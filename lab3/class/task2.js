/* в классе Rabbit не вызывается конструктор родительского класса Animal. 
Это необходимо для инициализации свойств родительского класса. */

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name); // Вызов конструктора родительского класса
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  console.log(rabbit.name);
  console.log(rabbit.created);
