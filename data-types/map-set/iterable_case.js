"use strict"

console.log(`
	Нам просто нужно итерируемый объект map.keys() преобразовать в массив 
	Array.from(map.keys()), тогда у let keys 
	будут работать методы массива:

	let map = new Map();

	map.set("name", "John");

	let keys = Array.from(map.keys());

	keys.push("more");

	console.log(keys); // name, more

	`)

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more