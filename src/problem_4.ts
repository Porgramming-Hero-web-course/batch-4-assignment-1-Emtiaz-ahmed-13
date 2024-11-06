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
    const area = Math.PI * shape.radius * shape.radius;
    return parseFloat(area.toFixed(2));
  }

  if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
}
