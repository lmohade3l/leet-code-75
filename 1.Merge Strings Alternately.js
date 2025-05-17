/**
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.
 */

var mergeAlternately = function (word1, word2) {
  const firstArr = word1.split("");
  const secondArr = word2.split("");
  const mergeArr = [];

  for (
    let i = 0;
    i <
    firstArr.length +
      secondArr.length +
      Math.abs(firstArr.length - secondArr.length);
    i++
  ) {
    if (i % 2 === 0) {
      mergeArr.push(firstArr[i / 2] || "");
    } else mergeArr.push(secondArr[(i - 1) / 2] || "");
    console.log({ mergeArr });
  }
  return mergeArr.join("");
};

// better solution
const mergeStringsAlternately = (word1, word2) => {
  let i = 0;
  let output = "";

  while (i < word1?.lenght || i < word2?.length) {
    if (word1[i]) output += word1[i];
    if (word2[i]) output += word2[i];

    i++;
  }

  return output;
};
