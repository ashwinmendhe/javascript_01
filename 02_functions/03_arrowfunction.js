const user = {
    username: "ashwin",
    price: 100,
    welcomeMessge: function() {
        // console.log(`${this.username} welcom`)
        // console.log(this);
        
    }
}

user.welcomeMessge()
user.username = "mend"
user.welcomeMessge()

// console.log(this);

function chai(){
    let username = "ashwin"
    console.log(this.username);
    
}
chai()

const chai2 = function(){
    let username = "ashwin"
    console.log(this.username);
}
chai2()

const chai3 = () => {
    let username = "ashwin"
    console.log(this.username);
}
chai3()



//  arrow function

const addTwo = (a,b) => {
    return a+b
}
console.log(addTwo(4,5));

const addTwo2 = (a,b) => (a+b)
console.log(addTwo2(4,5));


const objArrow = (a,b) => ({num: "123"})
console.log(objArrow());


