"use strict"

console.log(`
	Создайте функцию конструктор Calculator, 
	которая создаёт «расширяемые» объекты калькулятора.

	Задание состоит из двух частей.

	Во-первых, реализуйте метод calculate(str), 
	который принимает строку типа "1 + 2" 
	в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
	Метод должен понимать плюс + и минус -.

	Пример использования:

	let calc = new Calculator;

	alert( calc.calculate("3 + 7") ); // 10
	Затем добавьте метод addMethod(name, func), 
	который добавляет в калькулятор новые операции. 
	Он принимает оператор name 
	и функцию с двумя аргументами func(a,b), которая описывает его.

	Например, давайте добавим умножение *, деление / и возведение в степень **:

	let powerCalc = new Calculator;
	powerCalc.addMethod("*", (a, b) => a * b);
	powerCalc.addMethod("/", (a, b) => a / b);
	powerCalc.addMethod("**", (a, b) => a ** b);

	let result = powerCalc.calculate("2 ** 3");
	alert( result ); // 8
	Для этой задачи не нужны скобки или сложные выражения.
	Числа и оператор разделены ровно одним пробелом.
	Не лишним будет добавить обработку ошибок.
`);

console.log(`
	Решение: 

	У меня почти все тоже самое, что и в учебнике, 
	за исключением небольшого нюанса:

	this.calculate = function(str){
		let [a, op, b] = str.split(' ');
		a = +a;
		b = +b;	
`);

function Calculator() {

	this.methods = {
		'-': (a, b) => a - b,
		'+': (a, b) => a + b,
	}
	this.calculate = function(str){
		let [a, op, b] = str.split(' ');
		a = +a;
		b = +b;

		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}

		return this.methods[op](a, b);
	}

	this.addMethod = function(name, func){
		this.methods[name] = func; 
	}	
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
