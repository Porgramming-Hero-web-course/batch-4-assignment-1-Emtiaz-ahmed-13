//problem -3
function countWordOccurrences(sentence: string, word: string): number {
  return sentence
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((item) => item === word.toLowerCase()).length;
}

console.log(
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
);
