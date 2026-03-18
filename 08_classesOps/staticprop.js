class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email
    }
    
}

const ashwin = new User("ashwin")
// console.log(ashwin.createId());
const iphone = new Teacher("iphone", "@ip")
iphone.logMe()
