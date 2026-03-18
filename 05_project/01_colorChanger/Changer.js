//  here selected click button which is selected by event

const buttons = document.querySelectorAll(".button")
console.log(buttons);
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        
        if (e.target.id==='gray') {
            console.log("yes");
            body.style.backgroundColor = e.target.id 
        }
        if (e.target.id==='white') {
            console.log("yes");
            body.style.backgroundColor = e.target.id 
        }
        if (e.target.id==='blue') {
            console.log("yes");
            body.style.backgroundColor = e.target.id 
        }
        if (e.target.id==='yellow') {
            console.log("yes");
            body.style.backgroundColor = e.target.id 
        }
    })
})
