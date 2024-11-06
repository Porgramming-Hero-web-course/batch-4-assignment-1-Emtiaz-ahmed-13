//problem -5

function getProperty<A, B extends keyof A>(obj: A, key: B): A[B] {
  return obj[key];
}
