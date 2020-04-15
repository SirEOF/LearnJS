/* For String reversal*/

/* Method one */
function revString(value){
    const arr = value.split('');
    arr.reverse();
    const res = arr.join('');
    return res;
}

console.log(revString("hello"));
console.log(revString("mow"));

/* Method two*/

function revStringTwo(value){
    let rev = "";

    for(let i = 0 ; i < value.length ; i++){
        const char = value[i];
        rev = char + rev;
    }
    return rev;
}

console.log(revStringTwo("hello"));
console.log(revStringTwo("bye"));