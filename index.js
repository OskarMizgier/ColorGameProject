// Array of colors for the squares
var numSquares = 6;
var colors = generateRandomColors(numSquares);
// Select the square by Class
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor.toUpperCase();
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('.newColors')
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

//Easy and hard btn events
easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none';
        }
    }
})

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = 'block';
    }
})

//reset button
resetButton.addEventListener('click', function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    resetButton.textContent = 'New colors'
    //change the squares color
    for (var i = 0; i < squares.length; i++) {
        //Change each color
            squares[i].style.backgroundColor = colors[i];
            }
        //Reset the h1 backgroundcolor
        h1.style.backgroundColor = 'steelblue'
})

// Loop through each six square and change their backgroundColor to colors[i]
for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click events
    squares[i].addEventListener('click', function (){
        // Find the picked color
        var clickedColor = this.style.backgroundColor;
        //Compare the color with the clicked color and alert the result
        console.log(clickedColor, pickedColor)
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = 'Play Again?'
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

//Generate Random Colors
function generateRandomColors (num) {
    //make an arr, add num random colors to arr, return arr
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

//Function random color
function randomColor() {
   var r = Math.floor(Math.random() * 256)
   var g = Math.floor(Math.random() * 256)
   var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}