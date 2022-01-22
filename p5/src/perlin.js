let inc
let val

function setup() {
  createCanvas(200, 200)
  pixelDensity(1) // Force high density displays to properly render
  inc = createSlider(0.001, 0.5, 0, 0.001)
}

function draw() {
  let yoff = 0 
  val = inc.value()
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
      xoff += val
    }
    yoff += val
  }
  updatePixels()
}


console.log('perlin.js') // LOG