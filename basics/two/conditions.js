/* Conditional statements in javascript */
let x = '10';

// Just checks for values
if(x == 10){
    console.log("X is 10");
}

// Checks for data types too
if(x === 10){
    console.log("X is 10")
}
else{
    console.log("X is not 10")
}

console.log("-----------------");

 x === 10 ? console.log("X is equal to 10") : console.log("X is not equal to 10");

console.log("-----------------");

switch(x){
    case 10:
        console.log("Number is equal to 10");
        break;
    default:
        console.log("Number is not equal to 10")
}