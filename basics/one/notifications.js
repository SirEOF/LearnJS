/* Immediately invoked function */

var a = 10;

( function() {
    var a = 20;
    console.log(a);
})();

console.log(a)

// ES6 stuff

let b = 10;
{
    let b = 20;
    console.log(b)
}

console.log(b)