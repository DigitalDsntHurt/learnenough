//
// //
// // // MAP
// //
//


//
// // example of .map -- squaring numbers
//

// simple example of a .map funciton that squares each value in an array
let a = [1,2,3,4,5]
console.log( a.map(function(x) { return x * x; }) );

// same as above, justing fat arrow notation
console.log( a.map( (n) => {return n * n;} ) );

// same as above but javascript allows super compact syntax for functions accepting a single argument
// the belwo does away with parentheses, curly braces and return statement
console.log( a.map(n => n * n) );


//
// // manipulating each string in an array
//


// functional method of taking an array of strings and for each string
// down-casing and replacing whitespace with dashes
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota" ];

console.log( states.map( state => state.toLowerCase().split(/\s+/).join('-')) );

//refactor of the above, separating the string manipulation out into its own fucntion
function urlify(string){
	return string.toLowerCase().split(/\s+/).join('-');
}

function functionalUrls(elements){
	return elements.map(element => urlify(element));
}

console.log( functionalUrls(states) );

// Compared to the imperative version, the functional version is a fifth as many lines (1 instead of 5), 
// doesn’t mutate any variables (often an error-prone step in imperative programming), 
// and indeed eliminates the intermediate array (urls) entirely.


//
// // EXERCISE
//

// Using map, write a function that takes in the states variable and 
// returns an array of URLs of the form https://example.com/<urlified form>
function urlStringManipulations(string){
	return "https://example.com/" + urlify(string);
}

function urlBuilder(elements){
	return elements.map( element => urlStringManipulations(element));
}

console.log( urlBuilder(states) );

// same as above but leveraging our urlify function
function urlBuilder(elements){
	return elements.map( element => urlStringManipulations(element));
}

console.log( urlBuilder(states) );



//
// //
// // // FILTER
// //
//


//
// // imperative version of filter
//
let singleWordStates = []

function imperativeSingles(elements){
	let singles = [];
	
	elements.forEach(function(element){
		if (element.split(/\s+/).length === 1){
			singles.push(element);
		}
	});
	return singles
}

console.log(imperativeSingles(states));



//
// // introducing functional version of filter
//

// modulo operator % returns the remainder after division
// we can use % to determine even and odd numbers where
// n % 2 = 0 for even numbers
// n % 2 != 0 for odd numbers

function isItEven(n){
	if (n % 2 === 0){
		return `Yay! ${n} is even!`;
	} else {
		return `Sorry. ${n} is odd ):`;
	};
};

console.log( isItEven(22) );
console.log( isItEven(433) );


// combine % with thie .filter method to get only even numbers
console.log( [1,2,3,4,5,6,7,8,9,10].filter( n => n % 2 === 0 ) );
// combine % with thie .filter method to get only odd numbers
console.log( [1,2,3,4,5,6,7,8,9,10].filter( n => n % 2 !== 0 ) );

// The syntax is almost exactly the same as map: 
// we give filter a variable (n) and then perform a test that returns true or false.


//
// // functional version of filter
//

console.log( states.filter( state => state.split(/\s+/).length === 1 ) );
// single line -- much more ocmpact and readable than imperative version

// return single word states
function functionalSingles(elements){
	return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log( functionalSingles(states) );

// return multi-word states
function functionalDoubles(elements){
	return elements.filter(element => element.split(/\s+/).length > 1);
}

console.log( functionalDoubles(states) );



//
// // EXERCISE
//
// Write two filter functions that return the Dakotas: 
// one using String#includes (Section 2.5) to test for the presence of the string “Dakota” and 
// one using a regex that tests for the length of the split array being 2.

console.log("\n v~~ FILTER EXERCISES ~~v \n");

function getDakotasWithIncludes(elements){
	return elements.filter(element => element.includes("Dakota"));
};

console.log( getDakotasWithIncludes(states) );

function getDakotasWithSplit(elements){
	return elements.filter(element => element.split(/\s+/).length === 2)
};

console.log( getDakotasWithSplit(states) );



//
// //
// // // REDUCE
// //
//

//
// // functional version of sum
//

console.log("\n v~~ FUNCTIONAL SUM ~~v \n");

let bignumbers = [22,33,44,55,66,77,88,99,111];
let numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0

numbers.forEach(function(num){
	sum += num;
});

console.log(sum);

// or the text's solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
		total += n;
	});
	return total;
}

console.log( imperativeSum(numbers) );

// the difference between my solution and the text's is important
// my solution moves the sum accumulator outside of the funciton whereas the text's solution keep it inside the function
// my solution uses a forEach loop directly on the array of numbers whereas the text's wraps it in a named function
// both differences make the text's solution more portable and replicable than mine


//
// // functional version of reduce
//

// The reduce method takes a function of two arguments, 
// the first of which is an accumulator for the result, 
// the second of which is the array element itself. 
// The return value of the (anonymous) function gets passed back to reduce as the starting value for the next element in the array. 
// The second argument is the initial value of the accumulator (in this case, 0).


console.log("\n v~~ FUNCTIONAL REDUCE ~~v \n");

numbers.reduce ((total, n) => {
	total += n;
	return total;
}, 0);

// two refinements

// 1. += returns its own value so we can declare and increment in the same statement
numbers.reduce ((total, n) => {
	return total += n;
}, 0);


//2. reduce's last argument is 0 by default, so we can exclude it
numbers.reduce ((total, n) => {
	return total += n;
});

// or on a single line
numbers.reduce( ( total, n ) => { return total += n } );

// then we wrap this reduce in a function so we can call it anywhere

function functionalSum(elements){
	return elements.reduce((total, n) => { return total += n });
};

console.log( functionalSum(numbers) );


// it's helpful to think of reduce as accumulating results 
// and storing them in its first argument,
// in the case above that first argument is total



//
// // imperative version of more complicated reduce
//
console.log("\n v~~ IMPERATIVE REDUCE (MORE COMPLICATED) ~~v \n");

function imperativeLengths(elements){
	let lengths = {};
	elements.forEach(function(element){
		lengths[element] = element.length;
	});
	return lengths
};

console.log( imperativeLengths(states) );

//
// // functional version of more complicated reduce
//
console.log("\n v~~ FUNCTIONAL REDUCE (MORE COMPLICATED) ~~v \n");

function functionalLengths(elements) {
	return elements.reduce((lengths, element) => { 
		lengths[element] = element.length;
		return lengths;
	}, {});
};

console.log( functionalLengths(states));

// Comparing the imperative and functional solutions above, 
// the advantages of reduce are not as clear as they were in the case of map and filter. 
// Indeed, a good argument can be made that the imperative solution is clearer.
// Which method to use is a matter of taste. 
// I’ve found that the more you program functionally, the more you want to do it, 
// and there’s a strange sort of pleasure in using reduce to solve a problem in a single (logical) line. 
// It’s also worth noting that reduce is a common technique among more advanced programmers, 
// and among other things plays a key role in an important technique (called MapReduce) for dealing efficiently with large datasets.




//
// // EXERCISES
//
console.log("\n v~~ REDUCE EXERCISES ~~v \n");

// Using reduce, write a function that returns the product of all the elements 
// in an array. Hint: Where += adds, *= multiplies. 
console.log("\n v~~ multiply an array of numbers ~~v \n");

function multiply(elements){
	return elements.reduce((product,element) => {
		product *= element;
		return product;
	});
};

console.log(multiply(numbers));

// or to refactor for fewer lines

function functionalProduct(array){
	return array.reduce((product,n) => product *= n );
}

console.log(functionalProduct(numbers));

// Remove the newlines in the reduce solution from Listing 6.9 ("functional version of more complicated reduce" in this file)
// to turn it into a single long line. 
// Does it still give the right answer? 
// How long is the resulting line of code?

console.log("\n v~~ original functional lengths syntax ~~v \n");


function functionalLengths(elements) {
	return elements.reduce((lengths, element) => { 
		lengths[element] = element.length;
		return lengths;
	}, {});
};

console.log( functionalLengths(states));

console.log("\n v~~ new, single line functional lengths syntax ~~v \n");

function functionalLengthsSingleLine(elements){return elements.reduce((lengths,element)=>{lengths[element]=element.length;return lengths;},{});};

console.log( functionalLengthsSingleLine(states));























