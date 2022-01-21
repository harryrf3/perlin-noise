let xoff = 0
let yoff = 0
let zoff = 0
let _x = 0
let _y = 0
let _z = 0
let minSize = 3 // see bottom for settings
let maxSize = 6 // ^

// console.log('perlin.js') // LOG

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
  let z = map(noise(zoff), 0, 1, minSize, maxSize)

  // update mapped position of xoff and yoff with new values, randomize positions based on Perlin Noise
  xoff += map(noise(xoff), 0, 1, 0.0001, 0.006)
  yoff += map(noise(yoff), 0, 1, 0.008, 0.0001)
  // update mapped sizes of minSize and maxSize with new values, ranomize size based on Perlin Noise
  zoff += map(noise(zoff), 0, 1, minSize, maxSize)
  
  // draw an ellipse with dynamic positioning and sizing
  ellipse(x, y, z, z)
  
  // display values of x and y
  _x = createP('X Offset ' + x)
  _y = createP('Y Offset: ' + y)
}

// #-

  // minSize && maxSize settings
  // -
  // Firefly: minSize = 3, maxSize = 6

// -#