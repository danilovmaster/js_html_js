"use strict"
console.log(`
	Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

	Пример вызовов:

	min(2, 5) == 2
	min(3, -1) == -1
	min(1, 1) == 1

	Наша функция:

	function min(a, b){
		return a <= b ? a: b; 
	}

`);

function min(a, b){
	return a <= b ? a: b; 
}

console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

console.log(`
	заменим на стрелочную:
	let min_1 = (a, b)=> a<= b ? a: b; 
`)

let min_1 = (a, b)=> a<= b ? a: b; 
console.log(min_1(2, 5) == 2);
console.log(min_1(3, -1) == -1);
console.log(min_1(1, 1) == 1);