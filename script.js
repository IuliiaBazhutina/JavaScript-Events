// Mouse events: hovering and leaving the button changes a message
document.getElementById('clickButton').addEventListener('mouseenter', function () {
    this.innerHTML = "Click me";
    this.style.background = 'red';
})
document.getElementById('clickButton').addEventListener('mouseleave', function () {
    this.innerHTML = "Button";
    this.style.background = "yellow";
})
