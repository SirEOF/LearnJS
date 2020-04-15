// Conditional statements
var test = true


function fun() {
    if (test) {
        console.log(test)
        test = !test
    }
    else {
        console.log(test)
        test = !test
    }
}

for(var i = 0 ; i < 10 ; i++){
    fun()
}


// Switch statement

var test = 6

switch(test){
    case 1:
        console.log(1)
        break
    case 2:
        console.log(2)
        break
    case 6:
        console.log(6)
        break
    default:
        console.log("Didn't matched!")
}

var test2 = "hello"

switch(test2){
    case "me":
        console.log("me")
        break
    case "hello":
        console.log("It works")
        break
    default:
        console.log("It doesn't work for strings!")
}