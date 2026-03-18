const clock = document.getElementById('clock')
const banner = document.querySelector("#banner")
// document.querySelector('#clcok')

let date = new Date()
console.log(date.toLocaleTimeString())

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
})


setInterval(function(){
    let date = new Date()
    banner.innerHTML = date.toLocaleTimeString()
})