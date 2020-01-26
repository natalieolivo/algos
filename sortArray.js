let arr = [3, 20, 100];
let arrObj = [{ age: 40, lastName: "Olivo", firstName: "Natalie"}, {age:41,  lastName: "Haynes", firstName: "Kwesi"}, {age: 60, lastName: "Ortiz", firstName: "Jacqueline" }];

// sort a set of numbers
arr.sort((a, b) => a - b);
console.log(`sort array`, arr);

// sort properties in an object in ascending order 
arrObj.sort((a,b) => {
	if(a === b) {
		return 0;
	}

	return a.age < b.age ? -1 : 1;
});
console.log(`sort array with objects`, arrObj);

// sort object properties by rank
const arrObjRank = [{ age: 40, rank: "Engineer I", firstName: "Natalie" }, { age: 60, rank: "Engineer V", firstName: "Sam" }, { age: 102, rank: "Engineer X", firstName: "Oldie" } ];
const rankOrder = ["Engineer I", "Engineer V", "Engineer X"];

arrObjRank.sort((a, b) => {
	return rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank);
});
console.log(`Rank objects in array`, arrObjRank);
