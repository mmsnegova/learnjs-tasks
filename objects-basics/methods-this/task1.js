/* Использование "this" в литерале объекта
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему? */
"use strict";
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?
//получим ошибку TypeError: Cannot read properties of undefined (reading 'name')
//так как this можно использовать только в методе, в данном случае ref
//не является методом
