/* Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
начиная от from и заканчивая to.

Сделайте два варианта решения.
Используя рекурсивный setTimeout. */

//Используя setInterval.
/* function printNumbers(from, to) {
  let count = from;
  let timerId = setInterval(() => console.log(count++), 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, (to - from + 2) * 1000);
} */

function printNumbers(from, to) {
  let count = from;
  setTimeout(function tick() {
    console.log(count);
    if (count < to) {
      setTimeout(tick, 1000);
    }
    count++;
  }, 1000);
}
printNumbers(1, 7);
