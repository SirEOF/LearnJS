/* String methods */

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()
console.log(stringOne.charCodeAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("to"));

// fromCharCode()
console.log(String.fromCharCode(114));

// includes()
console.log(stringTwo.includes("frontend"));

// indexOf
console.log(stringTwo.indexOf("end"));

//lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));

// match()
//regex

// repeat()
console.log(stringOne.repeat(2));

// replace()
// regex

// search
console.log(stringTwo.search("end"));

// slice
console.log(stringTwo.slice(2,4));

// split()
console.log(stringTwo.split(" "));

// startsWith()
console.log(stringTwo.startsWith("for"));

// toUpperCase()
console.log(stringOne.toUpperCase());

// toLowerCase()
console.log(stringOne.toLowerCase());

// trim() remove whitespace from start and end
var stringThree = "    Hello there  ";
console.log(stringThree.trim());