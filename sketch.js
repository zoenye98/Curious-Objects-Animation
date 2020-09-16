let boxColor = 255;
let colorChange = 2;
let bgColor = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(boxColor-255);
  ellipse(176, 126, 90, 120);

  fill(255);
  stroke(255);
  rect(126, 60, 95, 70);

  fill(boxColor);
  ellipse(176, 126, 80, 110);

  fill(boxColor-255);
  ellipse(176, 126, 70, 100);

  fill(boxColor-255);
  stroke(0);
  rect(132, 120, 88, 10);

  fill(boxColor);
  ellipse(176, 126, 50, 80);

  fill(boxColor-255);
  rect(170, 185, 8, 8);
  rect(167, 193, 14, 50);
  ellipse(174, 278, 70, 70);

  fill(255);
  stroke(255);
  rect(120, 260, 90, 60);

  if (boxColor > 255 || boxColor < bgColor) {
    colorChange = -colorChange;
  }
  boxColor = boxColor + colorChange;

}
