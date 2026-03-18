function mult(num) {
    this.num = num
    return num*5
}

mult.power = 2

console.log(mult(5))
console.log(mult.power)
console.log(mult.prototype)



function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}

createUser.prototype.printM = function(){
    console.log(`scrore is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 100)

chai.printM()





