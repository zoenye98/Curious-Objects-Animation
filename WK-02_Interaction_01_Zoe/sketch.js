let boxX = 300;
let speed = 1.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(0);
  ellipse(boxX-125, 126, 90, 120);

  fill(255);
  stroke(255);
  rect(127, 60, 90, 70);

  fill(255);
  ellipse(176, 126, 80, 110);
  
  fill(0);
  ellipse(176, 126, 70, 100);

  fill(0);
  stroke(0);
  rect(boxX-168, 120, 88, 10);

  fill(255);
  ellipse(boxX-124, 126, 50, 80);

  fill(0);
  rect(170, 185, 8, 8);
  rect(167, 193, 14, 50);
  ellipse(174, 278, 70, 70);

  fill(255);
  stroke(255);
  rect(boxX-180, 260, 90, 60);

  rectMode(CENTER);
  rect(boxX, 300, 50, 50);
  if (boxX > width) {
    speed = speed*-1
  } else if (boxX < 0){
    speed = speed*-1
  }
  boxX = boxX + speed;


}
