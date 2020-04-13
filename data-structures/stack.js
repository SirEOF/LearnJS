/* Stacks */
// functions: push, pop, seek, length

/* Program to find a palindrome */

var letters = [];
var word = "racecars";
var rword = "";

// Put letters of word into stack
for ( let i = 0 ; i < word.length ; i++){
    letters.push(word[i]);
}

for( let i = 0 ; i < word.length;i++){
    rword += letters.pop();
}

if(rword == word){
    console.log("The string is a palindrome!");
}else{
    console.log("The string is not a palindrome!");
};