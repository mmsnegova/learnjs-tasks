/* Связанная функция как метод
важность: 5
Что выведет функция?*/

function f() {
  alert(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();
