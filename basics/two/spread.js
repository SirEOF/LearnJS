const me = [10,20,30,40,50]

function logit(){
    console.log('number of arguments is: ' + arguments.length)
    Array.from(arguments).map(item => console.log(item))
}

logit(...me,'mike')

function test(){
    console.log(arguments[1])
}

test(...me)