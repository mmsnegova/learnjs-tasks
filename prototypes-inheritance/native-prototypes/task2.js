/* Добавьте функциям декорирующий метод "defer()"
важность: 4
Добавьте всем функциям в прототип метод defer(ms),
который возвращает обёртку, откладывающую вызов функции
на ms миллисекунд. */

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);
