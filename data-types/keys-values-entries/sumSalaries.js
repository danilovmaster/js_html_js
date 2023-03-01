"use strict"

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

console.log(sumSalaries(salaries));