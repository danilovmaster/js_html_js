"use strict"

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumPpropsObj(obj) {
	let count = 0;

	for (let prop in obj){
		if (salaries[prop] != undefined) {
			count += obj[prop];
		} 
	}

	return count;
}

let sum = sumPpropsObj(salaries);

console.log(sum);

