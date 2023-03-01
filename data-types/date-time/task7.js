/* Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(),
возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день,
т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToTomorrow() {
  let nowDate = new Date();
  let tomorrowDate = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate() + 1
  );
  return Math.round((tomorrowDate - nowDate) / 1000);
}

console.log(getSecondsToTomorrow());
