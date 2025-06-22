var isPalindrome = function (x) {
  if (x < 0) return false;
  const strigX = x.toString();
  for (let i = 0; i < strigX.length / 2; i++) {
    if (strigX[i] !== strigX[strigX.length - i - 1]) return false;
  }
  return true;
};
