// Array iterations

// for each
[1 ,2, 3].forEach(function (item , index){
    console.log(item , index);
})

//map perform operation on each element of the array
const three = [1,2,3]
const doubled = three.map(function (item){
    return item*2;
})
console.log(doubled)

//filter fills the array if condition is true
const ints = [1,2,3]
const evens = ints.filter(function(item){
    return item % 2 === 0
})
console.log(evens)

//reduce do something 

//sum 
const test = [1,2,3,-1,4].some(function(item){
    return item < 0;
})

console.log(test)

//find
const objects  = [{id : 'a'} , {id : 'b'}]
const find = objects.find(function (item){
    return item.id === 'b'
})
console.log(find) 

//find index
const objects1  = [{id : 'a'} , {id : 'b'}]
const find1 = objects.findIndex(function(item){
    return item.id == 'b'
})

console.log(find1)