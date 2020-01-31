//
// // intro to defining objects
//

// define a phrase constructor function
// function Phrase(content){
// 	this.content = content;
// }
// // inside the Phrase functions, "this" represents the object itself 
// // and we can assign it properties, in this case "content"

// // because we define Phrase in this way, we can create a new phrase like so
// let greeting = new Phrase("Hello, world!");
// // and access its properties like so
// console.log("\n*~~instantiate a new instance of the Phrase object~~*");
// console.log(greeting.content);

// // object names are typically written in camel case with a leading capital letter



//
// // relevant utility functions from other chapters
//



// reverse a string
function reverse(string){
	return Array.from(string).reverse().join("");
}

console.log("\n*~~reverse a string with .reverse~~*");
console.log(reverse("i'm not a girl, not yet a woman"));

// return true for palindrome, false otherwise
function palindrome(string){
	let processedContent = string.toLowerCase();
	return processedContent == reverse(processedContent);
}

console.log("\n*~~return palindrome boolean~~*");
console.log(palindrome("i'm not a girl, not yet a woman"));
console.log(palindrome("racecar"));
console.log(palindrome("Racecar"));


// now we add the palindrome function to the Phrase object
// object methods are effectively just properites of the object

// because the phrase's content is already available within the Phrase object
// the palindrome function no longer needs to take it as an argument
// so we change palindrome from a one argument function to a no argument function


function Phrase(content){
	this.content = content;

	this.palindrome = function palindrome(){
		let processedContent = this.content.toLowerCase();
		return processedContent === reverse(processedContent);
	}

	this.louder = function louder(){
		return this.content.toUpperCase();
	}
}

let greeting = new Phrase("Hello, world!");
let racecar = new Phrase("Racecar");
console.log("\n*~~log the phrase objects~~*");
console.log(greeting);
console.log(racecar);
console.log("\n*~~run palindrome on them~~*");
console.log(greeting.palindrome());
console.log(racecar.palindrome());
console.log("\n*~~capitalize a phrase~~*");
console.log(greeting.louder());
console.log(racecar.louder());













