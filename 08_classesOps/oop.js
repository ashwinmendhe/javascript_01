const user = {
    us : "ashwin",
    loginC : 1,
    signedIn : true,
    getUserDetail: function(){
        console.log(`Username: ${this.us}`)
        // console.log(this)
    }
}
console.log(user.us);
user.getUserDetail()

// const promiseOne = new Promise()
const date = new Date()

function User(username, loginCount){
    this.username = username
    this.loginCount = loginCount

    return this
}

const userOne = new User("ashwin", 7)
const userTwo  =new User("mend", 3)
console.log(userTwo);


