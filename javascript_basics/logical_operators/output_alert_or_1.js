"use strict"

console.log(`
	Что выведет код ниже?

	alert( null || 2 || undefined );

	'Этот код выведет 2 - так как это первое истинное утверждение, проверим:
`);	

console.log( null || 2 || undefined );