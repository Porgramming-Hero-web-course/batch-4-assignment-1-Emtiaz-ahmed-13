//problem -3
function countWordOccurrences(sentence: string, word: string): number {
  return sentence
    .toLowerCase()
    .split(" ")
    .filter((element) => element === word.toLowerCase()).length;
}

//console.log(countWordOccurrences("I love typescript", "typescript"));
