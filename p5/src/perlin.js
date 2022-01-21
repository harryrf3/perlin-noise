let xoff = 0
let yoff = 0
let yoffText
let xoffText
let _x = 0
let _y = 0

// TODO: Find a way to display returns of noise functions

console.log('perlin.js')

function setup() {
  createCanvas(400, 400)
}

function draw() {
  
  // prevents scrolling offset results
  removeElements() 
  
  background(51)
  
  // map the result xoff and yoff between 0 and width, 0 and height
  let x = map(noise(xoff), 0, 1, 0, width)
  let y = map(noise(yoff), 0, 1, 0, height)
  
  // change result of noise(off)
  xoff += 0.008 // >0.001 strobes, creates jerky movement
  yoff += 0.008 
  
  // draw an ellipse
  ellipse(x, y, 24, 24)
  
  // update _x and _y
  _x = createP('X Offset ' + x)
  _y = createP('Y Offset: ' + y)

}

// // display x and y offsets on screen for users' reference
// function displayOffsets() {
//     xoffText = createP('X Offset ' + _x)
//   yoffText = createP('Y Offset: ' + _y)
// }

