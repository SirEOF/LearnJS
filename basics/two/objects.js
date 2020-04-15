const person = {
    firstname : 'Shubham',
    lastname : 'Arya',
    hobbies : ["chess" , "swimming" ,"reading"],
    address : {
        street: "Karanpur",
        city: "Dehradun",
        state: "Uttrakhand"
    }
}

console.log(person);
console.log(person.firstname, person.lastname , person.hobbies[1]);
console.log(person.address.state);

// Pulling stuff out of an object
const {firstname , lastname} = person;
console.log(firstname)

// Add properties
person.email = 'shubham@email.com'

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

const todoJson = JSON.stringify(todos); // Converts array to json
console.log(todoJson)