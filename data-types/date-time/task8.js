/* Форматирование относительной даты

Напишите функцию formatDate(date),
форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести
"n сек. назад".
В противном случае, если меньше часа, вывести
"m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр,
т.е. 31.12.16 10:00. */

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let DD = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  let MM =
    date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  let YY =
    date.getFullYear() % 100 > 9
      ? date.getFullYear() % 100
      : `0${date.getFullYear() % 100}`;
  let HH = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  let mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

  let nowDate = new Date();

  let df = Math.round(nowDate - date) / 1000;
  if (df <= 1) {
    return "прямо сейчас";
  } else if (df <= 60) {
    return `${df} сек. назад`;
  } else if (df <= 3600) {
    return `${df / 60} мин. назад`;
  } else return `${DD}.${MM}.${YY} ${HH}:${mm}`;
}
