/* Максимальная зарплата

У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries),
которая возвращает имя самого
высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников,
можно вернуть любого из них.
P.S. Используйте Object.entries и
деструктурирование, чтобы перебрать пары ключ/значение. */

function topSalary(salaries) {
  Object.entries(salaries);
  let prevSalary = 0;
  let topPaid = null;
  for (let [name, salary] of Object.entries(salaries)) {
    /* let [name, salary] = employee; */
    if (salary > prevSalary) {
      prevSalary = salary;
      topPaid = name;
    }
  }
  return topPaid;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let emptyObj = {};

console.log(topSalary(salaries)); //'Pete'
console.log(topSalary(emptyObj)); //null
