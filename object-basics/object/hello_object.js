"use strict"
let user = {};
user.name = 'John';
user.surname = 'Smith';

for (let prop in user){
	console.log(user[prop]);
}

user.name = 'Pete';
for (let prop in user){
	console.log(user[prop]);
}

delete user.name;

for (let prop in user){
	console.log(prop);
}