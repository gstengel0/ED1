function draw() {
//VERTICAL LINES (#1)
  for(let x=0; x<250; x+=5) {
   line(x, 0, x, 500)
  }
//HORIZONTAL LINES (#2)
  for(let i = 0; i <= 500; i+=5){
    line(250, i, 500, i)
  }
//DIAGONAL LINES (#3)
  for (let i = 0; i <= 250; i += 5){
    line(500, i, 500+i, 0);
    line(750, i, 500+i, 250);
    line(500, 250+i, 500+i, 250)
    line(750, 250+i, 500+i, 500)
  }
//DIAGONAL LINES (#4)
  for (let i=0; i<=250; i+=5) {
    line(750, i, 1000-i, 250)
    line(1000-i, 0, 1000, i)
    line(750, 250+i, 1000-i, 500)
    line(1000, 250+i, 1000-i, 250)
  }
}
