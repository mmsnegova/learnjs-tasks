//Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert(i--); //1, так как при i=1 цикл выполнится и будет выведено значение на i т.е. 1,затем i уменьшится с 1 до 0, а при i=0 цикл завершит свою работу, та как 0 интерпретируется как false
}