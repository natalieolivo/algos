function getRandomNumber(lo, hi) {
	let range = hi - lo;
	let randomRange = lo + (range * Math.random());
	return Math.floor(randomRange);
}

console.log(` ~~~Random range is equal to ~~~ ${getRandomNumber(3, 7)}`);

function isRandomDistro(a, b) {
	let rKeys = a;
	let randMap = new Map();

	for(let i = 0; i < 10; i++) {
		randMap.set(a++, getRandomNumber())
	}

	
}
