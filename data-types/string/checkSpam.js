"use strict"

console.log(`
	
	let checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX');


	Проверим на исходных данных, сформировав из них массив:
	let list_names = ['buy ViAgRA now', 'free xxxxx', 'innocent rabbit']

	for (let data of dataArray){
		console.log(checkSpam(data));
	}
	
`);

let checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX');

let dataArray = ['buy ViAgRA now', 'free xxxxx', 'innocent rabbit']

for (let data of dataArray){
	console.log(checkSpam(data));
}