"use strict"

let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = (array) => array.concat().sort();

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)