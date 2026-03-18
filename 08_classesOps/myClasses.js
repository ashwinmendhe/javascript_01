// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password} abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "@chai", 1234)
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function teaUser(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

teaUser.prototype.encrypt = function(){
    return `${this.username} password`
}

teaUser.prototype.pass = function(){
    return `${this.password} newpassword`
}

const tea = new teaUser("tea", "@tesa", 4663)
console.log(tea.encrypt());
console.log(tea.pass());

