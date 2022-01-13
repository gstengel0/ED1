var pW = 11 //width of paper in inches
var pH = 8.5 //height of paper in inches


function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {

  for(let i = 100; i <= 450; i+=5){
    line(200, i, 500, i)
  }

  for (let i = 0; i <= 250; i += 5){
    line(300, i, 500+i, 0);
    line(400, i, 500+i, 250);
    line(500, 200+i, 500+i, 210)
    line(750, 250+i, 300+i, 500)
  }

  for (let i=0; i<=250; i+=5) {
    line(600, i, 850-i, 100)
    line(1000, 250+i, 1000-i, 250)
  }

    save("mySVG.svg"); // give file name
    print("saved svg");
    noLoop(); // we just want to export once

}
