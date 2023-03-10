"use strict"
console.log(`
	Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

	pow(3, 2) = 3 * 3 = 9
	pow(3, 3) = 3 * 3 * 3 = 27
	pow(1, 100) = 1 * 1 * ...* 1 = 1
	Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).


	P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

`);

let pow = (a, b)=> a >= 1 && b >= 1 ?a ** b: 'введено ненатуральное число';
console.log(pow(3, 2) == 9);
console.log(pow(3, 3) == 27);
console.log(pow(1, 100), pow(1, 100) == 1);
console.log(pow(3, -2));