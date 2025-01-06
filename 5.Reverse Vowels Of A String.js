/**
 * 
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

var reverseVowels = function (s) {
  let vowels = [];
  let result = "";

  for (let i = 0; i < s?.length; i++) {
    if (["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"].includes(s[i]))
      vowels.push(s[i]);
  }

  let j = vowels?.length - 1;
  for (let i = 0; i < s?.length; i++) {
    if (["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"].includes(s[i])) {
      result += vowels[j];
      j--;
    } else {
      result += s[i];
    }
  }

  return result;
};
