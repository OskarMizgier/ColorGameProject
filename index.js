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
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor.toUpperCase();

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
            alert ('Correct')
        } else {
            alert ('wrong')
        }
    })
};

