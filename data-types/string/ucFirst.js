"use strict"

console.log(`
	Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

	ucFirst("вася") == "Вася";
`);

console.log(`
	Наша функция была достаточно проста,
	поэтому она стрелочная, однако первый вариант - 
	let ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
	вызовет ошибку, если будет передана пустая строка.

	Поэтому добавим проверку, если длина строки > 0
	мы ее обрабатываем, если пустая - возвращаем как есть
	
	let ucFirst = (str) => str.length > 0 ? str.at(0).toUpperCase() + str.slice(1) : str;


	Проверим ее на массиве имен, включая пустую строку:
	let list_names = ['вася', 'петя', 'майкл', 'хулио', '']
	
`);

let ucFirst = (str) => str.length > 0 ? str.at(0).toUpperCase() + str.slice(1) : str;

let list_names = ['вася', 'петя', 'майкл', 'хулио', '']

for (let name of list_names){
	console.log(ucFirst(name));
}