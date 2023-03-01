"use strict"
console.log(`
	Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

	«Включительно» означает, что значение переменной age может быть равно 14 или 90.

	`);

console.log(`
	Условие:
	14 <= age && age <= 90
	проверим на массиве чисел:
	let arr = [1, 3, 14, 55, 68, 73, 89, 90, 105, 1122]


	arr.forEach(function(age){
		if (14 <= age && age <= 90){
			console.log(age, 'В диапазоне');
		} else {
			console.log(age, 'Вне диапазона');
		}
	});

`)

let arr = [1, 3, 14, 55, 68, 73, 89, 90, 105, 1122]


arr.forEach(function(age){
	if (14 <= age && age <= 90){
		console.log(age, 'В диапазоне');
	} else {
		console.log(age, 'Вне диапазона');
	}
});

console.log(`

	заменим на стрелочную функцию

	arr.forEach((age)=> 14 <= age && age <= 90 ? console.log(age, 'В диапазоне') : console.log(age, 'Вне диапазона'));

`);

arr.forEach((age)=> 14 <= age && age <= 90 ? console.log(age, 'В диапазоне') : console.log(age, 'Вне диапазона'));