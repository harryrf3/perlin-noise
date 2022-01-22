// let xoff1 = 0
// let xoff2 = 1000

let xoff = 0

// console.log('perlin.js') // LOG

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(51)

  stroke(255)
  noFill()
  beginShape()
  for(var x = 0; x < width; x++) {
    stroke(255)
    // let y = random(height)
    let y = noise(xoff) * height
    vertex(x, y)

    xoff += 0.02
  }
  endShape()

  noLoop()

  // // map the value (0 and 1) of noise(xoff) between 0 and width, 0 and height
  // let x = map(noise(xoff1), 0, 1, 0, width)
  // let y = map(noise(xoff2), 0, 1, 0, height)
  
  // // add to value of xoff for next move
  // xoff1 += 0.008 // >0.001 strobes, creates jerky movement
  // xoff2 += 0.008 // >0.001 strobes, creates jerky movement
  
  // // draw an ellipse
  // ellipse(x, y, 24, 24)
}

