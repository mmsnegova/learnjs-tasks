/* Отфильтруйте анаграммы
важность: 4
Анаграммы – это слова, у которых те же буквы
в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает
массив слов, очищенный от анаграмм. 

Из каждой группы анаграмм должно остаться только
одно слово, не важно какое.
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let map = new Map(); //создали Map

  //перебирваем все слова в массиве
  for (let word of arr) {
    //разбиваем слово на буквы и сортируем их
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word); //записываем отсортированному слову слово из массива
    //если встретилось слово с уже существующейсортировкой, то значение в Map
    //переписывается
  }

  //возвращаем массив из значений Map
  return Array.from(map.values());
}
