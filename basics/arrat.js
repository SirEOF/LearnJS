// Array

var sandwich = ["bread" , "peanut butter" , "bread"]
var st = [["Shubham" , "Arya"] , ["Rahul", "Sharma"]]
console.log(st[1][1] + " will eat " + sandwich[1])

sandwich.forEach(function(el){
    console.log(el)
})

// Array methods

var arr = ["a" , "b" , "c" , "d"]

arr.push("e")
console.log(arr)

console.log(arr.pop())

var a2 = ["e" , "f" , "g" , "h"]

console.log(arr.concat(a2))

// Joins all the elements to create a string 

console.log(arr.join(" "))

// reverse changes the array

console.log(arr.reverse())

// shift  removes first element of the array

console.log(arr.shift())

// unshit adds element to beginnig of the array and returns length

console.log(arr.unshift("a"))

// slice parts of array

console.log(arr.slice(1,-1))

// sort
arr.sort()
console.log(arr)

//splice (modify the array)

console.log(arr.splice(1,2,"Js nuggets"))
console.log(arr)

// Copying array

var original = [true , true , undefined , false , null]

//slice
var news = original.slice(0)

// spread operator

news = [...original]

console.log(news)

// DEEP copying for nested array

var deepArray = [["free"]]

var shallow = deepArray.slice(0)
console.log(shallow)