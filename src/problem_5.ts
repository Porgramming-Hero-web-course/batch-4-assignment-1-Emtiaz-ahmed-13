//problem -5

function getProperty<A, B extends keyof A>(obj: A, key: B): A[B] {
  return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
