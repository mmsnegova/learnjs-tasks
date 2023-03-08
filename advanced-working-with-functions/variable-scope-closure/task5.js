/* Фильтрация с помощью функции
важность: 5
У нас есть встроенный метод arr.filter(f) для массивов.
Он фильтрует все элементы с помощью функции f.
Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие
с одним из элементов массива
Например: */

/* .. ваш код для inBetween и inArray */

function inBetween(a, b) {
  return function (x) {
    return a <= x && x <= b;
  };
}

function inArray(array) {
  return function (x) {
    return array.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
