"use strict"

console.log(`
	Повторение, здесь аналогичный код как и в /array-methods/unique.js

	Однако, у меня все равно есть некоторые вопросы,
	к тому как это работает на больших массивах 
	ну или на массивах с биг-дата
	

	let unique = (arr) => Array.from( new Set(arr)); 

`);

let unique = (arr) => Array.from( new Set(arr)); 

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O

