const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// js object for unique words wherein the keys will be the words and the values will be their counts
let uniquesUsingMap = new Map();

// an array of all words in the text
let words = sonnet.match(/[a-zA-Z']+/g);

// iterate through `words` and build up an associative array (= hash, = plain js object) of unique words
for (let i = 0; i < words.length; i++) {
	let word = words[i];
	let currentValue = uniquesUsingMap.get(word);
	if (uniquesUsingMap.get(word)) {
		uniquesUsingMap.set(word, currentValue + 1);
	} else {
		uniquesUsingMap.set(word, 1);
	}
}

console.log(uniquesUsingMap);
//console.log(uniques.length);