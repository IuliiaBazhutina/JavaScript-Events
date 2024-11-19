// Mouse events: hovering and leaving the button change a message and color
document.getElementById('clickButton').addEventListener('mouseenter', function () {
    this.innerHTML = "Click me";
    this.style.background = 'red';
})
document.getElementById('clickButton').addEventListener('mouseleave', function () {
    this.innerHTML = "Button";
    this.style.background = "yellow";
})

// keyboard events: display the latest key pressed
document.addEventListener('keypress', function (event) {
    const displayKeyPressed = document.getElementById('displayKeyPressed');
    displayKeyPressed.innerHTML = `Character: ${event.charCode}<br>Character pressed: ${String.fromCharCode(event.charCode)}`
})

// form events: displays a message when the form is submitted without refreshing the page
document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('submitMsg').innerHTML = "Form is submitted";
})

// focus and blur events: updates a message and color when the input gains or loses focus 
document.getElementById('email').addEventListener('focus', function () {
    this.value = "Please, enter your email";
    this.style.background = "yellow";
})

document.getElementById('email').addEventListener('blur', function () {
    this.value = "Your email";
    this.style.background = "pink";
})

// event delegation: clicking any button inside the container displays a new sign and changes the color 
const cont = document.getElementById('container');
cont.addEventListener('click', function (event) {

    // Check if the clicked element is a button
    if (event.target.tagName.toLowerCase() === 'button') {

        event.target.style.background = "red";

        // get message from the attribute data-message
        const message = event.target.getAttribute('data-message');
        // display the message on the button
        event.target.innerHTML = message;
    }
})
