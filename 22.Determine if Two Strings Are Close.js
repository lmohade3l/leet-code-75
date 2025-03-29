// var closeStrings = function (word1, word2) {
//   let set1 = new Set(word1);
//   let set2 = new Set(word2);

//   if (word1.length !== word2.length) return false;

//   let diff1 = [...set1].filter((i) => !set2.has(i));
//   let diff2 = [...set2].filter((i) => !set1.has(i));

//   if (diff1.length > 0 || diff2.length > 0) return false;

//   let map1 = new Map();
//   let map2 = new Map();

//   for (let i = 0; i < word1.length; i++) {
//     if (!map1.get(word1[i])) {
//       map1.set(word1[i], 1);
//     } else {
//       map1.set(word1[i], map1.get(word1[i]) + 1);
//     }

//     if (!map2.get(word2[i])) {
//       map2.set(word2[i], 1);
//     } else {
//       map2.set(word2[i], map2.get(word2[i]) + 1);
//     }
//   }
//   let values1 = [];
//   let values2 = [];
//   map1.forEach((value, key) => {
//     values1.push(value);
//   });

//   map2.forEach((value, key) => {
//     values2.push(value);
//   });

//   for (let i = 0; i < values1.length; i++) {
//     if (values1.sort()[i] !== values2.sort()[i]) return false;
//   }

//   return true;
// };



var closeStrings = function (word1, word2) {
  //first check the length before anything
  if (word1.length !== word2.length) return false;

  //now we need two check two things:
  //1. if the two strings have the same character set
  //2. if the freq array of each strings have the same elements regardless of position

  //the first solution creates sets for 1 and maps for 2
  //but it all can be done with two-length-set-arrays
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);
  const charPresence1 = new Array(26).fill(false);
  const charPresence2 = new Array(26).fill(false);

  for (let i = 0; i < word1.length; i++) {
    const charCode1 = word1.charCodeAt(i) - 97;
    const charCode2 = word2.charCodeAt(i) - 97;

    freq1[charCode1]++;
    freq2[charCode2]++;

    charPresence1[charCode1] = true;
    charPresence2[charCode2] = true;
  }

  //1.
  for (let i = 0; i < 26; i++) {
    if (charPresence1[i] !== charPresence2[i]) {
      return false;
    }
  }

  //2.
  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }

  return true;
};
