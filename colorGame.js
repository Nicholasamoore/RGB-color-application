var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

init();

//Functions

function init() {
	easyBtn.addEventListener("click", easyMode);
	hardBtn.addEventListener("click", hardMode);
	resetButton.addEventListener("click", reset);
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		//Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//Add click listeners to squares
		squares[i].addEventListener("click", clickedSquare)
	}
}

function clickedSquare() {
	var clickedColor = this.style.backgroundColor;
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = pickedColor;
		resetButton.textContent = "Play again?";
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again";
	}
}

function changeColors(color) {
	//Loop through all squares and change each square to match given color
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	//Add num random colors to array
	for (var i = 0; i < num; i++) {
		//Get random color and push into the array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//Pick a red, green, blue from 0-255
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";

}

function reset() {
	//Generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match Picked color
	colorDisplay.textContent = pickedColor;
	//Reset messageDisplay
	messageDisplay.textContent = "";
	//Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	//Update background color
	h1.style.backgroundColor = "steelBlue";
	this.textContent = "New Colors";

}

function easyMode() {
	numberOfSquares = 3;
	//Set active button to easy
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//Load colors array with 3 new colors
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	//Update colorDisplay span
	colorDisplay.textContent = pickedColor;
	//Change first 3 square colors
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} 
		//Hide the bottom 3
		else {
			squares[i].style.display = "none";
		}
	}
}

function hardMode() {
	numberOfSquares = 6;
	//Set active button to hard
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	//Load colors array with 3 new colors
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	//Update colorDisplay span
	colorDisplay.textContent = pickedColor;
	//Change first 3 square colors
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} 
}