//problem -3
function countWordOccurrences(sentence: string, word: string): number {
  return sentence
    .toLowerCase() // convert lowercase for case insensitive
    .split(" ")
    .map((element) => element.replace(/[^\w]/g, "")) // remove special characters
    .filter((element) => element === word.toLowerCase()).length;
}

console.log(
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
);
