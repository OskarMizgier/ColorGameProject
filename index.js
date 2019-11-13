// Array of colors for the squares
var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
];

// Select the square by Class
var squares = document.querySelectorAll('.square');

var pickedColor = pickColor();

var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor.toUpperCase();

var messageDisplay = document.getElementById('message');

// Loop through each six square and change their backgroundColor to colors[i]
for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click events
    squares[i].addEventListener('click', function (){
        // Find the picked color
        var clickedColor = this.style.backgroundColor;
        //Compare the color with the clicked color and alert the result
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = '#232323'
            messageDisplay.textContent = 'Try again!'
        }
    })
};

//Change colors of all squares when correct
function changeColors (color) {
for (var i = 0; i < squares.length; i++) {
//Change each color
    squares[i].style.backgroundColor = color;
    }
}



// Pick random color from colors array
function pickColor() {
    var randomNumber = Math.floor(Math.random() * colors.length)
    return colors[randomNumber]
}