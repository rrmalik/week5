// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener
window.addEventListener('DOMContentLoaded', function(event) {
    // console.log('the page was loaded!')

    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton = addEventListener('click', function(event) {
        console.log(event)
        event.preventDefault()
        let output = document.querySelector('.output')
        output.insertAdjacentHTML('beforeend', '<p> the button was clicked </p>')
    })

    let googleButton = document.querySelector('.google-link')
    googleButton.addEventListener('click', function(event) {
        event.preventDefault()
        let output = document.querySelector('.output')
        output.insertAdjacentHTML('beforeend', '<p> the google button was clicked </p>')
    })

    let firstNameInput = document.querySelector('#firstName')
    firstNameInput.addEventListener('keyup', function(event) {
        console.log(firstNameInput.value)
    })

}) 