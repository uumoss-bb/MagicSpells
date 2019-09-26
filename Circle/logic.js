
let Circle
function setup() {
  createCanvas( windowWidth, windowHeight, P2D)
  Circle = new DotCircle
  Circle.MakePoints()
}

function draw() {
  background("cream")
  Circle.Draw()
}

function DotCircle() {
  // this makes a circle out of dots

  let allPoints = []
  
  this.MakePoints = () => {
      // I got this from http://bl.ocks.org/bycoffe/3404776
    let radius = 111,
    num_points = 111,
    angle = 0, 
    x = 0,
    y = 0,
    centerX = windowWidth/2,
    centerY = windowHeight/2

    for (let c = 0; c < num_points; c++) {

      angle = (c / (num_points / 2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                            // For a semicircle, we would use (i / num_points) * Math.PI.
      x = (radius * Math.cos(angle)) + centerX // Calculate the x position of the element.
      y = (radius * Math.sin(angle)) + centerY // Calculate the y position of the element.

      allPoints.push({
        x: Number(x.toFixed(0)),
        y: Number(y.toFixed(0)),
      })
    }
  }

  this.Draw = () => {
    for (let index = 0; index < allPoints.length; index++) {
      const point = allPoints[index];
      fill("black")
      circle(point.x, point.y, 2)
    }
  }
}