// signleton object
const tinderUser = new Object()

console.log(typeof tinderUser);
// non singleton object
const nonuser = {}
console.log(nonuser);

tinderUser.name = "ashwin"
tinderUser.id = "123"
tinderUser.isLoggedin = true
console.log(tinderUser)

const regularUser = {
    email: "ashwin@gmail.com",
    fullname: {
        userfullname : {
            firstname: "ashwin",
            lastname: "mendhe"
        }
    }
}

console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const course = {
    coursename : "java script",
    price: "999",
    courseinstructor: "ashwin"
}

const {courseinstructor: instructor} = course
console.log(instructor);

