/* Loops and iterators in javascript */

/*********************************************************************/
/* For loop */

const num = [1 ,2 ,3 ,4, 69];
for(let i = 0 ; i  < num.length ; i++){
    console.log(num[i]);
}

console.log("---------");

let i = 0
while(i < num.length){
    console.log(num[i]);
    i++;
}
console.log("---------");

/*********************************************************************/
/* Looping through arrays */

const todos = [
    {
        id : 1,
        text : 'take out trash',
        isCompleted : false
    },
    {
        id : 2,
        text : 'meeting with boss',
        isCompleted : true
    },
    {
        id : 3,
        text : 'clean house',
        isCompleted : false
    }
]


/* For of loop */
for(i of todos){
    console.log(i.id ,i.text,i.isCompleted);
}
console.log("---------");



