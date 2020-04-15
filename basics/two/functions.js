
/* Functions in javascript */
function f1(num = 1, num2 = 2){
    return num + num2;
}
console.log(f1(10 , 20));
console.log("----------------")

/* Arrow functions */
const result = (n1 = 1 , n2 = 2) => {
    return n1+n2;
}
console.log(result(30 , 40))
console.log("----------------")

const result2 = ( n1 , n2 ) => n1 + n2
console.log(result2(80 , 90));
console.log("----------------")
