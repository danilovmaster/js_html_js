"use strict"

alert(`
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) 
и после показывает их сумму.
`);

let [a, b] = [...Array(2)].map(()=> +prompt('введите число'));

alert(a + b);