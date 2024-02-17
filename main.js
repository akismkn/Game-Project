// Get all elements with the class "elementButton"
var elementButtons = document.querySelectorAll('.elementButton');

// Add an event listener to each button
elementButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Pass the button number (index + 1) to roundStart
        roundStart(index + 1);
    });
});
