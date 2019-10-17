// O(N) - increment for every letter in string
//
//
// stack   input[i]   adjust   
//   (        (         0
//   ((       (         0
//   (        )         0
//   empty    )         0
//   result: adjust =   0
// ------------------------
//
//    (       (         0
//    empty    )        0
//    empty    )        1
//     (       (        1
//     result: adjust = 2
//
//
function bracketMatch(input) {
	let stack = []; // hold an array of open parens
	let adjust = 0;

	for(let i = 0; i < input.length; i++) {
		if(input[i] === "(") {
			stack.push(input[i]);
		} else {
			let popped = stack.pop();
			if(popped !== "(") {
				adjust++;
			}
		}
	}

	if(stack.length !== 0) {
		adjust++;
	}

	return adjust;
}

console.log(bracketMatch("(()"));
console.log(bracketMatch("(())"));
console.log(bracketMatch("())("));

