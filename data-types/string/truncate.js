"use strict"

console.log(`
	Наша функция:
	
	let truncate = (str, maxlength) => str.length > maxlength ? str.substr(0, maxlength - 1) + '...' : str;


	Проверим на исходных данных, сформировав из них массив:
	let dataArray = ['Вот, что мне хотелось бы сказать на эту тему:', 'Всем привет!']

	for (let data of dataArray){
		console.log(truncate(data, 20));
	}
	
`);

let truncate = (str, maxlength) => str.length > maxlength ? str.substr(0, maxlength - 1) + '...' : str;

let dataArray = ['Вот, что мне хотелось бы сказать на эту тему:', 'Всем привет!']

for (let data of dataArray){
	console.log(truncate(data, 20));
}