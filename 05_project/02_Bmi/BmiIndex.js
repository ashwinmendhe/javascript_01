//  select form its a submit one 
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Pls give valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Pls give valid weight ${weight}`
    }
    else {
        const bmi = height * weight
        result.innerHTML = bmi
    }
    
})