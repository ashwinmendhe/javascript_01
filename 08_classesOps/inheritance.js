class User { 
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Uername is ${this.username}`);        
    }
}

 
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        
    }
    addCourse(){
        console.log(`A new added ${this.username}`);
        
    }
}

const chai = new Teacher("ashwin", "@men", 12334455)
chai.addCourse()

const massalaChai = new User("mendhe")
massalaChai.logMe()

console.log(chai instanceof Teacher);
