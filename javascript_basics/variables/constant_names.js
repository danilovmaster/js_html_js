"use strict"
const BIRTHDAY = '1976-10-21'; // константа неизменяемая
let age = new Date(BIRTHDAY);
const current_year = new Date().getFullYear(); // эта константа - условно постоянная, то есть может меняться в зависимости от времени исполнения кода
console.log(current_year - age.getFullYear());
console.log(`
	const BIRTHDAY = '1976-10-21';
	let age = new Date(BIRTHDAY);
	const current_year = new Date().getFullYear(); 
	console.log(current_year - age.getFullYear());

	const BIRTHDAY = '1976-10-21'; // константа неизменяемая
	const current_year = new Date().getFullYear(); // эта константа - условно постоянная, 
	то есть может меняться в зависимости от времени исполнения кода
`);