/* Напишите функцию randomInteger(min, max), которая
генерирует случайное целое (integer) число от min до
max (включительно).

Любое число из интервала min..max должно появляться с
одинаковой вероятностью.*/

function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
