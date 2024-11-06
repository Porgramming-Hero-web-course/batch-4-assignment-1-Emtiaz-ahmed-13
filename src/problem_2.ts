//problem -2

function removeDuplicates(array: number[]): number[] {
  return array.filter((element, index) => array.indexOf(element) === index);
}
