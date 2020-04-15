/* Strict mode */

// Converts mistakes into errors

function foo(){
    // "use strict";
    y = 10;
    console.log(y)
}

foo()

// In strict mode, deleting a variable is not allowed

function bar(){
    // "use strict";
    var a = 10;
    delete a;
}

bar()