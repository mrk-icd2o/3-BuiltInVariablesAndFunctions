# Lesson 3 - Built in Variables and Functions

So far we've only used variables we created ourselves. p5.js also comes with a number of built-in variables and functions we can use without declaring them.

## Built-in Variables

- `width` and `height` store the values you set with `createCanvas()`
- `windowWidth` and `windowHeight` give the dimensions of the viewable browser window - use these in `createCanvas()` instead of a fixed size
- `mouseX` and `mouseY` store the current x and y position of the mouse
- `mouseIsPressed` and `keyIsPressed` are `true` while those buttons are held down, `false` otherwise
- `key` stores the most recent key pressed, `keyCode` stores special keys as numeric codes (see the [p5.js reference](https://p5js.org/reference/p5/keyCode/) for values)


## Built-in Functions

So far we've used `setup()` and `draw()`, which are mandatory. There are also optional functions that only run when a specific event happens:

- `mousePressed()` and `keyPressed()` run once when those buttons are pressed down
- `mouseClicked()` runs once when a mouse button is pressed and released
- `mouseReleased()` and `keyReleased()` run once when those buttons are released

These are set up the same way as `draw()` and `setup()`:

```javascript
function mousePressed() {
  // code in here
}

function keyReleased() {
  // code in here
}
```

## Other Useful Functions

Some built-in functions generate values for us instead of responding to events:

- `random()` generates random numbers - use it in place of a fixed number
- `dist()` calculates the distance between two points
- `year()`, `month()`, `day()`, `hour()`, `minute()`, `second()` return the current date/time as numbers
- `millis()` gives the number of milliseconds since the sketch started


NOTE: none of the values above (`random()`, `hour()`, etc) can be assigned to a global variable outside of a function - they only produce a value once a function has actually run.


