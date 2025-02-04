// my original solution
var isSubsequence = function (s, t) {
  if(s === "") return true;
  
  let subIndex = 0;
  let sub = s[0];

  for (let i = 0; i < t.length ; i++) {
      if (t[i] === sub) {
          if (subIndex === s.length - 1) return true;
          else {
              subIndex++;
              sub = s[subIndex];
          }
      }

  }
  return false;
};

// two pointers
const isSubsequenceWithPointers = (s, t) => {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer<t.length) {
    if(s[sPointer]===t[tPointer]) sPointer++;
    tPointer ++;
  }

  return sPointer===s.length;
}