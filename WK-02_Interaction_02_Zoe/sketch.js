
let boxDim = 40;
let growth = .5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(0);
  ellipse(176, 126, boxDim+50, 120);

  fill(255);
  stroke(255);
  rect(126, 60, boxDim+55, 70);

  fill(255);
  ellipse(176, 126, boxDim+40, 110);

  fill(0);
  ellipse(176, 126, boxDim+30, 100);

  fill(0);
  stroke(0);
  rect(132, 120, boxDim+48, 10);

  fill(255);
  ellipse(boxDim+136, 126, boxDim+10, 80);

  fill(0);
  rect(170, 185, 8, 8);
  rect(167, 193, 14, 50);
  ellipse(174, 278, boxDim+30, 70);

  fill(255);
  stroke(255);
  rect(boxDim+80, 260, boxDim+50, 60);

  if (boxDim > 100 || boxDim < 40) {
    growth = growth*-1;
  }
  boxDim = boxDim + growth;

}
