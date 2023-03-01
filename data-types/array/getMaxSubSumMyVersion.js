"use strict"

const startMy= new Date().getTime();

function getMaxSubSumMyVersion(array){

	let currentSum = 0;
	let temp = [0,];

	for (let num of array){
		if (num >= 0) {
			temp.push(currentSum += num);
		} else {
			currentSum = 0;
		}
	}

	return temp.sort((a, b)=> a - b).reverse()[0];
}

console.log( getMaxSubSumMyVersion([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSumMyVersion([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSumMyVersion([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSumMyVersion([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSumMyVersion([1, 2, 3]) ); // 6
console.log( getMaxSubSumMyVersion([-1, -2, -3]) ); // 0


const endMy = new Date().getTime();
console.log('Время выполнения моего скрипта ', endMy - startMy);