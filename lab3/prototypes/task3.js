/* Проблема заключается в том, что оба хомяка наследуют от одного и того же объекта hamster, и свойство stomach является общим для обоих.
 Когда кормите одного хомяка, изменяется общее свойство stomach в объекте hamster, что влияет на обоих хомяков.

Чтобы исправить это, нужно создать отдельные свойства stomach для каждого хомяка */

// Добавление свойства stomach к каждому объекту

let hamster = {
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
};
  speedy.stomach = [];
  
  let lazy = {
    __proto__: hamster
};
  lazy.stomach = [];
  
  speedy.eat("apple");
  console.log(speedy.stomach); // ["apple"]
  console.log(lazy.stomach); // []

  /* Каждый хомяк имеет свое собственное свойство stomach,
    поэтому изменения, внесенные в одно свойство,
    не влияют на другое. */