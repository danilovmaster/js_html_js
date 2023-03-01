"use strict"

alert(`
	Ответ на вопрос. Отличий нет. В любом случае, 
	если возраст > 18 будет осуществлен возврат из функции, 
	а если меньше возникнет окно с вопросом.
	Проверим: 
	`);

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
checkAge(+prompt()); 

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

checkAge(+prompt()); 