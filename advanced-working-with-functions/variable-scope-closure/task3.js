/* Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке? */
"use strict";

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
  sayHi();
}

// sayHi(); ошибка
//так как функция объявлена внутри блока if, то за его пределами она не доступна
//чтобы ошибки не было, ее нужно вызвать внутри if, тогда она выведет "Hello, John"
