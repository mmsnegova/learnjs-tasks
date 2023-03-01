/* Оставить уникальные элементы массива

Пусть arr – массив строк.

Напишите функцию unique(arr), которая
возвращает массив, содержащий только
уникальные элементы arr. */

function unique(arr) {
  return arr.reduce((prev, item) => {
    if (!prev.includes(item)) {
      prev.push(item);
    }
    return prev;
  }, []);
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
