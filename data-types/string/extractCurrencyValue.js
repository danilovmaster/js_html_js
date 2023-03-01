"use strict"

console.log(`
	Наша функция снова стрелочная:
	let extractCurrencyValue = (str) => +str.slice(1);

	Проверим ее на массиве данных, включая пустую строку и предположим, 
	что есть строки, не соответсвующие данному формату:

	let dataArray = ['$120', '$123450', '€345', '₽3456', '', 'бла-бла-бла'];

	for (let data of dataArray){
		console.log(extractCurrencyValue(data));
	}
		
`);

let extractCurrencyValue = (str) => +str.slice(1);

let dataArray = ['$120', '$123450', '€345', '₽3456', '', 'бла-бла-бла'];

for (let data of dataArray){
	console.log(extractCurrencyValue(data));
}