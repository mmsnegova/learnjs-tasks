/* Сумма свойств объекта

Есть объект salaries с произвольным количеством свойств,
содержащих заработные платы.

Напишите функцию sumSalaries(salaries),
которая возвращает сумму всех зарплат
с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  let summa = 0;
  for (let salary of Object.values(salaries)) {
    summa += salary;
  }
  return summa;
}
