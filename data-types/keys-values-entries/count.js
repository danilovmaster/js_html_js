"use strict"

let user = {
  name: 'John',
  age: 30
};

let count = (obj) => Object.keys(obj).length;

console.log(count(user));