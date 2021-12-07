let gif;

function preload (){
gif = loadImage ('gif/AiBG.gif');
}
function setup() {
  createCanvas(windowWidth, windowWidth);
  strokeWeight(1);
  stroke(236,236,236);
}

function draw() {
translate (0, 0);

var num = 3; //variable for the number of squares in the array
var sideLen = windowWidth/num; //variable for the side length of each square

  for (var y = 0; y < windowHeight; y = y + sideLen) {//loop to create rows in the y direction


  for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction
image (gif, x, y);
  }
}

  noLoop ();

}
