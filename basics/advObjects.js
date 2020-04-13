// Using objects for lookups
var alpha = {
    1 : "A",
    2 : "B",
    3 : "C"
// ...
}
console.log(alpha[2])

// Removing object properties
let dishes = {
    plates : 8,
    cups : 7,
    sausers : 9
}
delete dishes.cups
console.log(dishes)

// Testing objects for properties
console.log(dishes.hasOwnProperty('plates'))
console.log(dishes.hasOwnProperty('cups'))

var nested = {
    desk : {
        folder : 1,
        nolder : 2
    },
    drawer: {
        cc : 4,
        pc : 5
    }
}
console.log(nested.desk.folder)

// Generate array of all object keys
console.log(Object.keys(nested))