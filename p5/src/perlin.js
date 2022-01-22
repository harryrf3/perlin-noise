// let xoff1 = 0
// let xoff2 = 1000

// let xoff = 0

let inc = 0.01
let start = 0
// console.log('perlin.js') // LOG

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(51)

  stroke(255)
  noFill()
  beginShape()

  let xoff = start
  for(var x = 0; x < width; x++) {
    stroke(255)
    let n = map(noise(xoff), 0, 1, 0, height)
    let s = map(sin(xoff), 0, 1, -50, 50)
    let y = s + n
    vertex(x, y)
    xoff += inc // 0.440 middle A on piano ;)
  }

  endShape()
  start += inc
  // noLoop()
}

