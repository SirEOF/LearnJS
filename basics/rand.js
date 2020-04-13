/* Random Number */

 var T = 30
while(T--){
    console.log(Math.floor(Math.random() * 30 + 1 ))
}

function randomRange(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomRange(100 , 300))

//convert number to any base

console.log(parseInt(10 , 2))