// primitive type
/* 7: string, number, boolean, null, undefined, symbol, bigint

// non-premitive type:
// Array, object , function 
*/
const heros = ["shaktiman", "super", "bat"]
let myObj = {
    name: "ashwin",
    age: "35"
}

const myFunction = function(){
    console.log("ashwin")
}


// stack: primitive, its gives only copy , heap : non-premitive , its giving reference to that object

let myyou = "ashwin.com"

let anothername = myyou

console.log(anothername)



