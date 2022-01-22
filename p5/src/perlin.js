let inc = 0.01

function setup() {
  createCanvas(200, 200)
  pixelDensity(1) // Force high density displays to properly render
}

function draw() {
  let yoff = 0 
  loadPixels()
  for (let y = 0; y < height; y++) {
    let xoff = 0
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4
      let r = noise(xoff, yoff) * 255
      pixels[index+0] = r
      pixels[index+1] = r
      pixels[index+2] = r
      pixels[index+3] = 255
      xoff += inc
    }
    yoff += inc
  }
  updatePixels()
}


console.log('perlin.js') // LOG