function rgbNew(){
    var n = Math.floor(Math.random() * 256);
    var m = Math.floor(Math.random() * 256);
    var o = Math.floor(Math.random() * 256);
    return 'rgb(' + n + ',' + ' ' + m + ',' + ' ' + o + ')'; 
}
function randomColors(numberOfBoxes){
    var arr = [];
    for(var i=0;i<numberOfBoxes;i++){
        arr.push(rgbNew());
    }
    return arr;
}
function pickedColors(){
    var random = Math.floor(Math.random() * randomColor.length);
    return randomColor[random];
}
var heading = document.querySelector("#heading");
var rgb = document.querySelector("#rgb");
var newColor = document.querySelector("#newColor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var content = document.querySelector("#content");
var numberOfBoxes = 6;
var boxes = document.querySelectorAll(".box");
var randomColor = randomColors(numberOfBoxes);
var pickedColor = pickedColors();
newColor.addEventListener("click", function(){
    randomColor = randomColors(numberOfBoxes);
    pickedColor = pickedColors();
    rgb.textContent = pickedColor;
    newColor.textContent = "New Colors";
    content.textContent = "";
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = randomColor[i];
    }
    heading.style.background = "wheat"; 
})
rgb.textContent = pickedColor;
for(var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = randomColor[i];
    boxes[i].addEventListener("click", function(){
        var selectedColor = this.style.backgroundColor;
        console.log(selectedColor, pickedColor);
        if(selectedColor === pickedColor){
            content.textContent = "Correct!";
            newColor.textContent = "Play Again?";
            for(var i = 0; i < boxes.length; i++){
                boxes[i].style.background = selectedColor;
            }
            heading.style.background = selectedColor;
        }
        else {
            this.style.backgroundColor = "dimgray";
            content.textContent = "Try Again";
        }
    });
}
hard.addEventListener("click", function(){
    hard.classList.add("selected");
	easy.classList.remove("selected");
	numberOfBoxes = 6;
	randomColor = randomColors(numberOfBoxes);
	pickedColor = pickedColors();
	rgb.textContent = pickedColor;
	for(var i = 0; i < 6; i++){
		boxes[i].style.backgroundColor = randomColor[i];
		boxes[i].style.display = "block";
	}
});
easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numberOfBoxes = 3;
	randomColor = randomColors(numberOfBoxes);
	pickedColor = pickedColors();
	rgb.textContent = pickedColor;
	for(var i = 0; i < 6; i++){
		if(randomColor[i]){
			boxes[i].style.background = randomColor[i];
		}
        else {
			boxes[i].style.display = "none";
		}
	}
});