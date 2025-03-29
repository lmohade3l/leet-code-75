var closeStrings = function (word1, word2) {
  let set1 = new Set(word1);
  let set2 = new Set(word2);

  if (word1.length !== word2.length) return false;

  let diff1 = [...set1].filter((i) => !set2.has(i));
  let diff2 = [...set2].filter((i) => !set1.has(i));

  if (diff1.length > 0 || diff2.length > 0) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    if (!map1.get(word1[i])) {
      map1.set(word1[i], 1);
    } else {
      map1.set(word1[i], map1.get(word1[i]) + 1);
    }

    if (!map2.get(word2[i])) {
      map2.set(word2[i], 1);
    } else {
      map2.set(word2[i], map2.get(word2[i]) + 1);
    }
  }
  let values1 = [];
  let values2 = [];
  map1.forEach((value, key) => {
    values1.push(value);
  });

  map2.forEach((value, key) => {
    values2.push(value);
  });

  for (let i = 0; i < values1.length; i++) {
    if (values1.sort()[i] !== values2.sort()[i]) return false;
  }

  return true;
};

