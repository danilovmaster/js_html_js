"use strict"

console.log(`
	Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

	Любое число из интервала min..max должно появляться с одинаковой вероятностью.

	Пример работы функции:

	alert( randomInteger(1, 5) ); // 1
	alert( randomInteger(1, 5) ); // 3
	alert( randomInteger(1, 5) ); // 5
	Можно использовать решение из предыдущей задачи.
`);

console.log(`
	изменим немного предыдущее решение,
	чтобы максимум получать примерно равновероятно,
	как и другие числа,
	для этого добавим к выражению max-min единицу.
	После этого округим рандомное значение
`);

function randomInteger(min, max){
	let temp = Math.random();
	return Math.round(temp * (max + 1 - min) + min);
}

console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );