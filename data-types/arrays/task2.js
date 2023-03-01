/* Операции с массивами

Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».

Добавьте «Рок-н-ролл» в конец.

Замените значение в середине на «Классика». Ваш код
для поиска значения в середине должен работать
для массивов с любой длиной.

Удалите первый элемент массива и покажите его.

Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-рол */

let styles = ["Джаз", "Блюз", "Рок"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
