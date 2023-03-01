"use strict"
console.log(`
	Какое последнее значение выведет этот код? Почему?

	let i = 3;

	while (i) {
	  alert( i-- );
}
`);

console.log(`
	1
	цикл будет работать пока значение переменной i > 0, 
	как только i станет равным 0
	цикл прекратит работу, 0 конвертируется в булево false.
	Проверим:
`);

let i = 3;

while (i) {
	console.log( i-- );
}	