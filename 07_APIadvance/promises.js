const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('nowCompeted');
        resolve();
    }, 1000)
}).then(function(){
    console.log("Promise now consumed");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promise three created")
        resolve({username:"ashwinmendhe", email:"ashwin.mendhe@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})



// promise 4

promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"asdf", pass: "aswet"})
        } else {
            reject('ERROR:Wrong')
        }
    }, 1000)
})

const username = promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username) => {
console.log("52",username)
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>
    console.log("60 Promise executed")
)



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({un: "ashwin", pas: "rutvi"})
        }
        else
        {
            reject('Error: Js went wrong')
        }
    },1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log("84", response);
    } catch (error) {
        console.log(error)
    }   
}
consumePromiseFive()



// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUser()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data)})
.catch((error) => {console.log("110 E",error)})



