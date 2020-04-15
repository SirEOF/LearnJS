// Variables

var myName = "Shubham Arya";
console.log("My name is " + myName);

// Boolean
var data = true;
if(data){
    console.log("Booleans rule..!!!");
}
else{
    console.log("Booleans are dumb...!!!");
}

// Null
var n = null;
console.log( n * 32); // will output 0

// Undefined 
var a;
console.log(a + 2); //NaN

// Number
var num = 3.6;
var ber = 6.3;
var reb = 2;
console.log(num + ber + reb);

// String
var name = "Shubham";
console.log("Hii my name is " + name);

// Symbol 
var s1 = Symbol("foo");
var s2 = Symbol("foo");
console.log(String(s1) == String(s2))

// Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make);

