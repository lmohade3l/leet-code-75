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