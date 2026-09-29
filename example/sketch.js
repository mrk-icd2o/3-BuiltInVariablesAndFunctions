/*
   Description: Lesson 3 - Built in Variables and Functions example
   Author: Mr. Kowalczewski
   Date of last edit: September 22, 2026
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // ----- Built-in Variables -----
  textSize(20);
  text(width, 100, 50);

  console.log("mouseX= " + mouseX);

  // the x value is half the width, the y value is half the height
  circle(width / 2, height / 2, 50, 50);

  // draws a line from (0, 0) to the mouse cursor (mouseX, mouseY)
  line(0, 0, mouseX, mouseY);

  // showing the last key pressed
  text(`Last key pressed is: ${key}`, 100, 100);

  // ----- Other Built-in Functions (random, second, millis) -----
  text("Random Number: " + random(0, 50), 100, 150);
  text("Current Minute: " + minute(), 100, 200);
  text("Time since Start: " + millis(), 100, 250);
}

// ----- keyPressed() -----
function keyPressed() {
  // random stroke colour when a key is pressed
  stroke(random(255), random(255), random(255));
}

// ----- mouseClicked() -----
function mouseClicked() {
  // random grey-white fill when the mouse is clicked
  fill(random(100, 255));
}

