function numberCompare(a,b){
	if (a > b)  {
		return 1;
	} else if (a < b) {
		return -1;
	} else {
		return 0;
	}
}

let a = [17,42,8,99]

// console.log(numberCompare(66,66));
// console.log(a.sort());
// console.log(a.sort(numberCompare));


let altStringMessage = (string) => {
	if (string) {
		return "string is nonempty";
	} else {
		return "string is empty";
	}
}

// console.log(altStringMessage("hi"));
// console.log(altStringMessage(""));
// console.log(altStringMessage());
// console.log(altStringMessage(66));


function squaresANumber(x){
	return x*x;
}

console.log(squaresANumber(2));
console.log(squaresANumber(66));

let altSquare = (x) => {
	return x*x;
}

console.log(altSquare(2));
console.log(altSquare(66));


function sq(x){
	return Math.sqrt(x);
}

console.log(altSquare(2));
console.log(altSquare(66));

let asq = (x) => {
	return Math.sqrt(x);
}

console.log(altSquare(2));
console.log(altSquare(66));