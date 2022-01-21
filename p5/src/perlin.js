let xoff = 0

// console.log('perlin.js') // LOG

function setup() {
  createCanvas(400, 400)
}

function draw() {
  
  background(51)
  
  // map the result xoff and yoff between 0 and width, 0 and height
  let x = map(noise(xoff), 0, 1, 0, width)
  let y = map(noise(xoff), 0, 1, 0, height)
  
  // change result of noise(off)
  xoff += 0.008 // >0.001 strobes, creates jerky movement
  
  // draw an ellipse
  ellipse(x, y, 24, 24)

}

