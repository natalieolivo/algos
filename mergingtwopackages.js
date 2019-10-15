// Given a package with a wieght limit, limit
// implement a function that finds to items whose sum of 
// weights equals the weight limit
// Your function should return a pair of the indices [i,j]
// Ordered such that i > j
// If a pair doesn't exist, return an empty array 
// Example [4,6,10,15,16], limit = 21
// Output [3, 1]
//
// {
//	4 : 0, 0 + 1 = 10
//	6 : 1, 0 + 2 = 14
//	10 : 2, 0 + 3 = 19
//	15 : 3, 0 + 4 = 20
//	16 : 4, 1 + 2 = 16
//
//	1 + 3 = 21 -- found 
// }
//
function getIndicesOfItemWeights(arr, limit) {
	let weightMap = new Map();
	let indexArr;
	arr.forEach((n, index) => {
		let weight = arr[index];
		let complementIndex = weightMap.has(limit-weight) ? weightMap.get(limit-weight) : null;
		if(complementIndex) {
			indexArr = [index, complementIndex];
		} else {
			weightMap.set(weight, index);
		}

	})
	return indexArr || [];
}
let arr = [4,6,10,15,16];
console.log(getIndicesOfItemWeights(arr, 21));
