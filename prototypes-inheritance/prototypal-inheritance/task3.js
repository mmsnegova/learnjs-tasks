/* Куда будет произведена запись?
важность: 5
Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit? */
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); //свойство full вместо this получит объект rabbit, у объекта rabbit будет новое свойство "full: true"
