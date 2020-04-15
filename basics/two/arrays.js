/* Arrays in JavaScript */

const numbers = new Array('10 , 20 , 30 ,40');
console.log(numbers);
console.log("----------");

const fruits = ["Apple" , "Banana" , "Orange"];
// fruits = [] Will give an error because of const
console.log(fruits)
console.log(fruits[1]);
console.log("----------");

fruits.push('Grapes'); // Add a value on to the end
console.log(fruits);
console.log("----------");

fruits.unshift('Strawberries'); // Add a value to front of the array
console.log(fruits)
console.log("----------");

fruits.pop(); // Remove a value from the end
console.log(fruits);
console.log("----------");

fruits.shift(); // Remove a value from the front
console.log(fruits);
console.log("----------");

console.log(fruits.indexOf("Orange"));
console.log("----------");
console.log(Array.isArray(fruits));
console.log("----------");

/*************************************************************************/

/* Array methods */
 
// For Each

fruits.forEach(function(value , index){
    console.log(index, value);
})
console.log("----------");

// Filter
console.log(fruits.filter((value , index) => value == "Banana"));
console.log("----------");

// Map
console.log(fruits.map((value,index) => value + " Fruit"));
console.log("----------");


