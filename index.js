'use strict';


function wordLetterPairs(str) {
  let allPairs = [];

  // Tokenize the string and put the tokens/words into an array
  let words = str.split(' ');
  // For each word
  for (let w = 0; w < words.length; w++) {
    // Find the pairs of characters
    let pairsInWord = letterPairs(words[w]);

    for (let p = 0; p < pairsInWord.length; p++) {
      // allPairs[pairsInWord[p]] = pairsInWord[p];
      allPairs[p] = pairsInWord[p];
    }
  }

  return allPairs;
}


function letterPairs(str) {
  let numPairs = str.length - 1;
  let pairs = [];

  for (let i = 0; i < numPairs; i++) {
    pairs[i] = str.substr(i, 2);
  }

  return pairs;
}


function compareStrings(str1, str2) {
  let pairs1 = wordLetterPairs(str1.toLowerCase());
  let pairs2 = wordLetterPairs(str2.toLowerCase());

  let union = [...pairs1, ...pairs2].length;

  let intersection = pairs1.filter(x => pairs2.includes(x)).length;


  return (2.0 * intersection) / union;
}

module.exports = compareStrings;