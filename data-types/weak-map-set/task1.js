/* Хранение отметок "не прочитано"

Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом
происходит где-то ещё. Добавляются новые сообщения и
удаляются старые, и вы не знаете в какой момент это может произойти.

Имея такую вводную информацию, решите, какую структуру
данных вы могли бы использовать для ответа на вопрос
«было ли сообщение прочитано?». Структура должна быть
подходящей, чтобы можно было однозначно сказать,
было ли прочитано это сообщение для каждого объекта сообщения.

P.S. Когда сообщение удаляется из массива messages,
оно должно также исчезать из структуры данных.

P.P.S. Нам не следует модифицировать сами объекты
сообщений, добавлять туда свойства. Если сообщения
принадлежат какому-то другому коду, то это может
привести к плохим последствиям. */

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

//используем коллекуию WeakSet
let readMsgSet = new WeakSet();

//запишем в нее сообщения, которые были прочитаны
readMsgSet.add(messages[0]);

//проврим, было ли прочтитано сообщение
console.log(readMsgSet.has(messages[0])); //true
console.log(readMsgSet.has(messages[1])); //false

//удалим сообщение messages[0]
messages.shift();

//проверим, есть ли оно в readMsgSet
console.log(readMsgSet.has(messages[0])); //false
