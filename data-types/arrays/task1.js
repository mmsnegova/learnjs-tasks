/* Скопирован ли массив?

Что выведет следующий код? */

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits; //скопировали ссылку, массив остался тот же
shoppingCart.push("Банан"); //добавили элемент в массив

// что в fruits?
alert(fruits.length); // 4