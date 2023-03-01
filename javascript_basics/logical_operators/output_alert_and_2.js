"use strict"
console.log(`
	Что выведет код ниже?

	console.log( console.log(1) && console.log(2) );`);
console.log(`
	1, а затем undefined

	console.log(1) выполнится внутри, выведя 1, 
	при этом функция console.log ничего не возвращает,
	то есть возвращает undefined, 
	а это первое ложное утверждение, 
	после этого вывода,
	функция console.log прекратит свою работу.

	Проверим:
`);
console.log(console.log(1) && console.log(2));