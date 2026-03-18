function addNum(num1, num2) {
    console.log(num1+num2);
    
}

const result = addNum(4,3)


function loginU(username) {
    if (!username) {
        console.log("plz enter");
        return
    }
    return `usernsme is : ${username}`

}

console.log(loginU());

// rest operator
function calcu(val1, val2 ,...num1){
    return num1
}
console.log(calcu(2,3,4,5));
