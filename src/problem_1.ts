//problem -1

function sumArray(array: number[]): number {
  let sum: number = 0;
  array.forEach((element: number) => {
    sum += element;
  });
  return sum;
}
