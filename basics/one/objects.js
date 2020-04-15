//Objects
var myCar = new Object()
myCar.make = "ford"
myCar.car = "maruti"
myCar.color = "blue"
console.log(myCar.color)
console.log(myCar.make)

myCar["year"] = 1969
console.log(myCar.year)

// Constructor 
function car(make , model , color){
    this.make = make;
    this.model = model;
    this.color = color;
}

var myCar = new car("ford" , "mustang" , "blue")
var newCar = new car("honda" , "hero" , "black")

for(i in myCar){
    console.log(myCar[i])
}

for(i in newCar){
    console.log(newCar[i])
}

// Object create
var animal = {
    type: "pet",
    displayType: function(){
        console.log(this.type)
    }
}

var a1 = Object.create(animal)
a1.displayType();

var fish = Object.create(animal)
fish.type = "sea"
fish.displayType()