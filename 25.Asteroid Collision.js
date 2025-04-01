var asteroidCollision1 = function (asteroids) {
  let stack = [...asteroids];
  let n = asteroids.length - 1;

  while (n >= 0) {
    if (stack[n] * stack[n - 1] < 0) {
      const last = stack.pop();
      const onToLast = stack.pop();
      console.log({ stack }, { last }, { onToLast });
      if (Math.abs(last) > onToLast) {
        stack.push(last);
      } else if (Math.abs(last) < onToLast) {
        stack.push(onToLast);
      } else if (Math.abs(last) == onToLast) {
        n--;
      }
    }
    console.log({ stack });
    n--;
  }

  return stack;
};

var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let a = asteroids[i];
    if (a > 0) stack.push(a);
    else {
      //while there are positive values that have magnitude less than a's, pop them
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(a)
      ) {
        stack.pop();
      }
      //if all values have been poped
      if (stack.length == 0 || stack[stack.length -1] < 0) stack.push(a);
      else if (stack[stack.length - 1] == Math.abs(a)) stack.pop();
    }
  }

  return stack
};

console.log(asteroidCollision([10, 2, -5]));
