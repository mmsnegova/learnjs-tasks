/* Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выведут alert с одинаковыми значениями или нет? */

/* Постфиксная форма: */
for (let i = 0; i < 5; i++) alert(i); //1,2,3,4

/* Префиксная форма: */
/* for (let i = 0; i < 5; ++i) alert( i ); */ //1,2,3,4
//оба цикла выведутся с одинаковым значениями, так как в момент применения постфиксной и префиксной формы переменная i не используется
