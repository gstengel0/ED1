var pW = 11
var pH = 8.5
var x = 0;
var y = 0;

function setup () {
  createCanvas(pW * 72, pH * 72, SVG);
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  background(230);
  rectMode(CENTER);
  translate (width/2, height/2);

  do{
    rect (0, 0, 1 + x, 1 + y);
    x = x + 0
    y = y + 10
  }
  while (x < 600);

}

function draw() {
  //save("mySVG.svg");
  //print("saved svg");
  noLoop();
}
