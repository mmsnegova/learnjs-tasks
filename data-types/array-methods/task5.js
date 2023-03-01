/* Скопировать и отсортировать массив

У нас есть массив строк arr. Нужно получить
отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет
возвращать такую копию. */

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
