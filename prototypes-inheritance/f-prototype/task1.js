/* Изменяем "prototype"
важность: 5
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код: */

/* 
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true */

/* 1. Добавим одну строчку (выделенную в коде ниже).
Что вызов alert покажет нам сейчас? */

/* function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; //будет влиять на вновь создаваемые объекты с помощью new, но для старых протоип останется прежним

console.log(rabbit.eats); // true */

/* 2. …А если код такой (заменили одну строчку)? */
/* function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // обновили прототип

console.log(rabbit.eats); // false */

/* 3. Или такой (заменили одну строчку)? */

/* function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats; //нечего удалять, у rabbit не было собственного свойства eats

console.log(rabbit.eats); //true */

/* 4.  Или, наконец, такой:*/

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; //обновили прототип - удалили свойство из прототипа

console.log(rabbit.eats); // undefined
