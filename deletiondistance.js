// The deletion distance is the minimum
// number of characters you need to 
// delete in order to get the same strings
// Example: 
// input: "heat" and "hit"
// output: 3
//
// base case 1: "" and "" => 0
// base case 2: "" and "string" => 6
// Use hash map, key is letter, value is letter count 
// Loop through each string from front, if 
//
// {
//	e: 1,
//	a: 1,
//	i: 1
// }
//
// {
//	a: 1,
//	b: 1
// }
//
//  Time complexity O(N) - Linear time to iterate over strings (but we only do that once) 
//  Space complexity O(N) - Map is the only space used with up to N entries if strings don't match  
function deletionDistance(str1, str2) {
	let stringMap = new Map();
	let strQueue = [];
	
	function setStringInMap(string) {
		for(let i = 0; i < string.length; i++) {
			if(stringMap.has(string[i])) {
				strQueue.push(string[i]);
				//stringMap.delete(string[i]);
				//deleteCounts++;
			} else {
				stringMap.set(string[i], 1); // value set to 1 always
			}
		}		
	}
	
	setStringInMap(str1);
	setStringInMap(str2);
	
	console.log(strQueue);

	if(strQueue.includes(stringMap.get(strQueue[0]))) {
		return str1.length + str2.length;
	} else {
		return stringMap.size;
	}
}

console.log(`--------------------------------hash map solution:------------------------------`);

console.log(`expected: 3, got: `, deletionDistance("heat", "hit"));
console.log(`expected: 3, got: `, deletionDistance("dog", "frog"));
console.log(`expected: 4, got: `, deletionDistance("", "frog"));
console.log(`expected: 5, got: `, deletionDistance("tiger", ""));
console.log(`expected: 0, got: `, deletionDistance("", ""));
console.log(`expected: 9, got: `, deletionDistance("some", "thing"));
console.log(`expected: 4, got: `, deletionDistance("ab", "ba"));

console.log(`--------------------------------hash map solution ends------------------------------`);
// Note to self: Below feels like a waste of time since in JS you do not allocate memory for Arrays. Trying to adapt
// a solution from pseudo code and it seems like I will just get a similar if not more inefficient solution going down this route ...
function deletionDistance2(str1, str2) {
	let str1Len = str1.length;
	let str2Len = str2.length;
	let memo = [];

	for (let i = 0; i < str1Len; i++) {
		for (let j = 0; j < str2Len; j++) {
			if(i === 0) {
				memo[i][j] = j;
			} else if (j === 0) {
				memo[i][j] = i;
			} else if (str1[i-1] === str2[j-1]) {
				memo[i][j] = memo[i-1][j-1];
			} else {
				memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1]);
			}
		}
	}
	return memo[str1Len][str2Len]
}

//console.log(deletionDistance2("heat", "hit"));
