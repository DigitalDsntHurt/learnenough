// reverse a string
function reverse(string){
	//return string.split("").reverse().join("");
	return Array.from(string).reverse().join("");
	// in the above line, we use Array.from(string) instead of string.split
	// which allows us to revers strings containing emoji and other special characters
}

// return true for a palindrom, false otherwise
function palindrome(string){
	let processsedContent = string.toLowerCase();
	return reverse(processsedContent) === processsedContent;
}