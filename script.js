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
    document.getElementById('submitMsg').innerHTML="Form is submitted";
})