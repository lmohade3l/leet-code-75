//not pass the time-limit
var removeStars1 = function (s) {
  const stars = new Set();
  const nonStars = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") stars.add(i);
    else nonStars.add(i);
  }

  stars.forEach((starIndex) => {
    let toBeRemovedIndex = starIndex - 1;
    while (toBeRemovedIndex >= 0) {
      if (nonStars.has(toBeRemovedIndex)) {
        nonStars.delete(toBeRemovedIndex);
        break;
      }
      toBeRemovedIndex--;
    }
  });

  const result = [];

  nonStars.forEach((index) => {
    result.push(s[index]);
  });

  return result.join("");
};

var removeStars = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") stack.pop();
    else stack.push(s[i]);
  }

  return stack.join("")
};

console.log(removeStars("leet**cod*e"));
