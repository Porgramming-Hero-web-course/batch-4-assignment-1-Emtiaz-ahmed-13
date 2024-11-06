//problem -4

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape) {
  if (shape.shape === "circle") {
    // we are checking the shape property of the object
    const area = Math.PI * shape.radius * shape.radius;
    return parseFloat(area.toFixed(2)); // tofixed for 2 decimal places for same output match
  }

  if (shape.shape === "rectangle") {
    return shape.width * shape.height; // calculate area of rectangle
  }
}
