/* Свойство функции после bind
важность: 5
В свойство функции записано значение.
Изменится ли оно после применения bind? Обоснуйте ответ. */

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); // undefined, так как выше произошла привязка объекта,
//у которого нет свойства test
