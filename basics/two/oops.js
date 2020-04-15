/* Constructor function */
console.log("-----------------");
function Person (fname , lname , dob){
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    } 

    this.getInfo = (f , l , d) => `${this.fname} ${this.lname}`;
}

p1 = new Person("Shubham" , "Arya" , "6-05-2000")
console.log(p1);
console.log("-----------------");
console.log(p1.getBirthYear());
console.log("-----------------");
console.log(p1.getInfo());
console.log("-----------------");

/***********************************************************/

/* Classes */

class Man{
    constructor(fname = "" , lname = "" , dob = ""){
        this.lname = lname;
        this.fname = fname;
        this.dob = dob; 
    }

    getInfo(){
        return `${this.fname} ${this.lname}`
    }
}

m1 = new Man("Rahul" , "Sharma");
console.log(m1.getInfo());
console.log("-----------------");

