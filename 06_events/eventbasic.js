// https://www.youtube.com/watch?v=_TjtAyMkiTI
//  time from 3.45

const { useActionState } = require("react")

// event bubbling : from down to top , when click event genrate and if two clicked are mentioned 
// so first print chiled which is mentined in bottom then print top which is in the parent


// event capture : its reverse of event bubbling : from top to bottom

// events
e.preventDefault()  its does not take next dafult action

e.stopPropogate().   if there are multiple event gerated by single click we can stop progating that event


// event 

document.getElementById('#images').addEventListener('click', function (e) {
    console.log("image clicked")
    e.stopPropagation()
}, false)


document.querySelector("#owl").addEventListener('click', function(){
    console.log("image clicked")
    e.preventDefault()
}, true)


document.querySelector('#image').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
        console.log(e.target.ID)
        let removeIt = e.target.parentNode
        removeIt.remove() 

    }
    
}, false)