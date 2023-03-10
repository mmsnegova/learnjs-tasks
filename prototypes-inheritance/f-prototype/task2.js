/* Создайте новый объект с помощью уже существующего
важность: 5
Представьте, что у нас имеется некий объект obj,
созданный функцией-конструктором – мы не знаем какой именно,
но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj,
с которой такой вызов корректно сработает.
И пример функции-конструктора, с которой такой код поведёт себя неправильно. */

//верный вариант
function Obj() {}

let obj = new Obj();
let obj2 = new obj.constructor(); //для создания использовали консруктор существющего объекта

console.log(obj2.constructor == Obj); //true

//неверный вариант
function User() {}

//перезаписали прототип, и явно не указали constructor
User.prototype = {};

let user = new User();
let user2 = new user.constructor();
console.log(user2.constructor == User); //false
console.log(user2.constructor == Object); //true - из-за того что у User конструктора нет, взяли у встроенного Object
