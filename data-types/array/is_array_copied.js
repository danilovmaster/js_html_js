"use strict"

console.log(`
	let fruits = ["Яблоки", "Груша", "Апельсин"];

	// добавляем новое значение в "копию"
	let shoppingCart = fruits;
	shoppingCart.push("Банан");

	// что в fruits?
	alert( fruits.length ); // ?
`);

console.log(`
	4
	Здесь fruits и shoppingCart ссылается на один и тот же объект.
	Проверим и длину и содержимое массива fruits:

	for (let fruta of fruits){
		console.log(fruta);
	}

	}
`);

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log(fruits.length);

for (let fruta of fruits){
	console.log(fruta);
}