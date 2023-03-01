/* Получить средний возраст
важность: 4
Напишите функцию getAverageAge(users),
которая принимает массив объектов
со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического 
значения: (age1 + age2 + ... + ageN) / N. */

function getAverageAge(users) {
  let sumAges = 0;
  users.forEach((user) => {
    sumAges += user.age;
  });
  return Math.round(sumAges / users.length);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 36 };
let masha = { name: "Маша", age: 25 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));
