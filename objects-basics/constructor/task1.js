/* Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода. */

//для этого обе функции долны возвращать один и тот же объект
let obg = {};
function A() {
  return obg;
}
function B() {
  return obg;
}

let a = new A();
let b = new B();

console.log(a == b); // true
