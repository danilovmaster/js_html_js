"use strict"
console.log(`

	Что выведет код ниже?

	console.log( console.log(1) || 2 || console.log(3) );
`);

console.log(`
	1, затем 2 - 
	
	 первый внутренний алерт сработает и выведет 1, 
	 при этом console.log возвратит undefined, то есть ложное утверждение, 
	 а внешний console.log ищет первое истинное утверждение
	- это 2, оно выводится и этим заканчивается работа этого кода.
	
	Проверим:
`); 
console.log( console.log(1) || 2 || console.log(3) );