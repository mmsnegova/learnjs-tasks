/* Выделить число

Есть стоимость в виде строки "$120".
То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str),
которая будет из такой строки выделять числовое значение
и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 */

function extractCurrencyValue(str) {
  let number = "";
  for (let char of str) {
    if (isFinite(char)) {
      number += char;
    }
  }
  return +number;
}

console.log(extractCurrencyValue("$120"));
