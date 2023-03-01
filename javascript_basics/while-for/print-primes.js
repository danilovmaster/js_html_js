"use strict"
console.log(`

	Замените for на while
	важность: 5
	Перепишите код, заменив цикл for на while, без изменения поведения цикла.

	for (let i = 0; i < 3; i++) {
	  //alert( number {i}! );
	}
	`);

console.log(`
	while i < 3{
		console.log(number {i}! );
		i++;
	}
	`);
let i = 0;

while (i < 3){
	console.log(`number ${i}!` );
	i++;
}
console.log('\nСравним:\n');

for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}

