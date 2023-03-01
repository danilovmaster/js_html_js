"use strict"

function Calculator() {
  this.read = function() {
    this.a = + prompt('введите первое число, 0');
    this.b = + prompt('введите второе число, 0');
  };

  this.sum = function() {
    return this.a + this.b
  };

  this.mul = function() {
    return this.a * this.b
  };
};

let calculator = new Calculator();

calculator.read();

alert('Сумма = ' + calculator.sum());

alert('Произведение = ' + calculator.mul());