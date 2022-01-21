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
  
  // change result of noise(off)
  // xoff += 0.008 // >0.001 strobes, creates jerky movement
  // yoff += 0.008 

  xoff += map(noise(xoff), 0, 1, 0.0001, 0.006)
  // yoff += map(noise(yoff), 0, 1, 0.0001, 0.008) 
  yoff += map(noise(yoff), 0, 1, 0.008, 0.0001)

  zoff += map(noise(zoff), 0, 1, minSize, maxSize)
  
  // draw an ellipse
  ellipse(x, y, z, z)
  
  // update _x and _y
  _x = createP('X Offset ' + x)
  _y = createP('Y Offset: ' + y)
  _x = createP('Z Offset', + z)

}

// #-

  // minSize && maxSize settings
  // -
  // Firefly: minSize = 3, maxSize = 6

// -#