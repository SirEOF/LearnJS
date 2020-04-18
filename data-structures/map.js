/* Map data structure in javascript*/

let myMap = function(){

    this.collection = {};
    this.count = 0;

    // Find the size of the map
    this.size = function(){
        console.log(this.count);
    };

    // Find the presence of a key in the map
    this.isPresent = function(key){
        return (key in this.collection);
    };

    // Set key and value
    this.enter = function(key , value){
        this.collection[key] = value;
        this.count++;
    };

    // Get value at a key
    this.get = function(key){
        return (key in this.collection) ?  this.collection[key] : null;
    };

    // Delete an element present at key
    this.delete = function(key){
        if(key in this.collection){
            delete this.collection[key];
            this.count--;
        }
        else{
            return;
        }
    };

    // Print all key values in the map
    this.print = function(){
        for(i in this.collection){
            console.log(`${i} : ${this.collection[i]}`);
        }
    };

    // Delete all values
    this.purge = function(){
        this.collection = {};
        this.count = 0;
    };
    
}


m = new myMap();
m.enter('id',1);
m.enter('name','Arya');
m.enter('class','Upper Class');
m.enter('email','gmail@email.com');

m.print();
console.log(m.isPresent('id'))
console.log(m.isPresent('test'))
m.purge();
m.print();
