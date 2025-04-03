var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let substr = "";
      while (stack.length > 0 && stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }

      stack.pop();
      let k = "";
      while (stack.length > 0 && !isNaN(parseInt(stack[stack.length - 1]))) {
        k = stack.pop() + k;
      }

      stack.push(substr.repeat(Number(k)));
    }
  }

  return stack.join("");
};
