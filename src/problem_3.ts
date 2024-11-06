//problem -3
function countWordOccurrences(sentence: string, word: string): number {
  return sentence
    .toLowerCase()
    .split(" ")

    .filter(function (element) {
      return element === word.toLowerCase();
    }).length;
}

console.log(
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
);
