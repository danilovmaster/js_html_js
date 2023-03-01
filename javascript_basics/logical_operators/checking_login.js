"use strict"
let login = prompt('Кто там?')
if (login  == 'Админ') {
	let pass = prompt('Введите пароль');
	if (pass == 'Я главный') {
		alert('Здравствуйте!');
	} else if (pass == null) {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
}  else if (login == null) {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}