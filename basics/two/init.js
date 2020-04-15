/* Console is mainly used for debugging */
console.error('this is an error');
console.warn('this is a warning');

/*---------------------------------------------------------------*/
/* Variables */
/* Don't use var that much*/
let p = 20;
p = 10;
console.log(p);

// str = "Test" // This will give an error
// const test; // Will give an error
const str = "Hello"
console.log(str);

/*---------------------------------------------------------------*/
/* Data Types : String, Number, Boolean, null, undefined*/
const name = "Arya"
const age = 20;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined; // or let y;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

/*---------------------------------------------------------------*/
// Concatination
console.log("Hello my name is " + name + " and my age is " + age );

// Template String
console.log(`Hello my name is ${name} and my age is ${age}`);

/*---------------------------------------------------------------*/
// String methods
const string = "Hello"
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.substring(0,3));

// String to array
const stringTwo = "tech, now, bleh"
console.log(string.split(''));
console.log(stringTwo.split(', '))


