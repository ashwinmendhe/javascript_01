let myName = "ashwin  "
console.log(myName.length)


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function () {
        console.log(`spidy power is : ${this.spiderman}`)
    }
}

Object.prototype.ashwin = function(){
    console.log(`ashwin is present in all object`)
}




Array.prototype.heyAshwin = function(){
    console.log(`ashwin has array access`)
}

heroPower.ashwin()

myHeros.ashwin()
myHeros.heyAshwin()
// heroPower.heyAshwin()

// inheritance 
const User = {
    username : "ashwin"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// morder syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "chaiAurCode   "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`)
}

anotherUserName.truelength()

"ashwin.  ".truelength()

