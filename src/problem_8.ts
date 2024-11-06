//problem -8
function validateKeys<T extends object>(object: T, keys: (keyof T)[]): boolean {
  return keys.every((key) => key in object);
}
