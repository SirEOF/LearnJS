/* Advanced array opertations */

class User{
    constructor(user , email , password){
        this.user = user;
        this.email = email;
        this.password = password;
    }

    static about(){
        console.log("This function can be called without the class being instantiated");
    }

    register(){
        console.log(this.user , this.password , this.email);
    }
}

User.about();
u1 = new User("Arya" , "arya@email.com" , "supersecure");
u1.register();

/* extending */

class Member extends User{
    constructor(user , email, password , memberPackage){
        super(user , email , password);
        this.package = memberPackage;   
    }

    getPackage(){
        console.log(this.package)
    }
}

mike = new Member('mike' , 'mike@gmail.com' , 'pass' , 'Standard');

mike.register();
mike.getPackage();
