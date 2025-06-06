// recursion

/**
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";

  if (str1 === str2) return str1;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
};


const gcdOfStringsNonMathematical = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";

  if (str1 === str2) return str1;

  if (str1.length > str2.length)
    return gcdOfStringsNonMathematical(str1.slice(str2.length), str2);  // str1 - str2
  else return gcdOfStringsNonMathematical(str1, str2.slice(str1.length));  // str2 - str1
};
