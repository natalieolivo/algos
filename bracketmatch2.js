
let input = "(()"; // should be 1
//let input = "(())";
//let input = "())(";

function bracketMatch(input) {
	let stack = [];
	let count = 0;
	let result;

	input.split("").forEach((bracket, i) => {
		console.log(`bracket ${bracket}`);
		if(bracket === "(") {
			console.log("push");
			stack.push(bracket);
		} else {
			//console.log("pop", stack.pop());
			if(stack.pop() !== "(") {
				// could be null, or "("
				console.log(`counting, ${count}`);
				count++;
			}
		}
	})
	
	console.log(`stack length, ${stack.length}`);
	if(stack.length === 0) {
		result = count;
	} else {
		result = stack.length + count;
		console.log(`stack length, ${stack.length} count length, ${count}`);
	}	

	return result;
}

console.log(bracketMatch(input));

