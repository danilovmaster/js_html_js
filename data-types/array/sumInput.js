"use strict"

alert(`
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


`);

function sumInput() {

	let arrayNumbers = [];

	let n = +prompt('Введите число');

	while ( true ){
		if (n === '' || n === null || !isFinite(n)) break;

		arrayNumbers.push(+n);
	}
	
	let sum = 0;

	for (number of arrayNumbers){
		sum += number;
	}

	return sum;
}

alert( sumInput() );