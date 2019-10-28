//let input = "aabbcd";
//let input = "abc";
//let input = "abcc";
// let input = "aabbcceefghi";
// let input = "abcdefghhgfedecba";
let input = "aaaabbcc";
console.log("input", input);
function isValid(input) {
	let letterMap = new Map();
	let letterCounts = new Map();
	
	input.split("").forEach((letter, i)=> {
		if(letterMap.has(letter)) {
			console.log("counting up letter:", letter);
			let count = letterMap.get(letter);
			console.log("count value:", typeof count, count);
			letterMap.set(letter, count + 1);
			console.log(letterMap);
		} else {
			console.log("initial letter", letter);
			// initial setting of letter
			letterMap.set(letter, 1);
			console.log(letterMap);
		}
	});

	for(vals of letterMap.values()) {
		let count;
		if(!letterCounts.has(vals)) {
			letterCounts.set(vals, 1);
		} else {
			count = letterCounts.get(vals) + 1;
			letterCounts.set(vals, count);
		}
	}

	const findInMap = (map, val) => {
		for(let [k,v] of map) {
			console.log("value", v);
			if(v === val) {
				return true;
			} 
		}
		return false;
	}
	
	console.log("final letterMap:", letterMap);
	console.log("final letterCounts", letterCounts);
	console.log(letterCounts.size);
	console.log(findInMap(letterCounts, 1));

	if(letterCounts.size < 3 && findInMap(letterCounts, 1)) {
		return "YES";
	} else {
		return "NO";
	}
}

console.log(isValid(input));
