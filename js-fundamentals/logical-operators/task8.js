/* Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)? */

if (-1 || 0) alert("first"); //результат проверки условия true, alert выполниться
if (-1 && 0) alert("second"); //результат проверки условия false, alert не выполниться
if (null || (-1 && 1)) alert("third"); //результат проверки условия true, alert выполниться