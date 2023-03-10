/* Работа с прототипами
важность: 5
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
Должно быть 3 ответа.
*/

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true - берем из объекта rabbit

delete rabbit.jumps;

console.log(rabbit.jumps); // null - так как в rabbit больше нет этого свойства, то берем из его прототипа animal

delete animal.jumps;

console.log(rabbit.jumps); // undefined - в прототпе animal тоже больше нет этого свойства
