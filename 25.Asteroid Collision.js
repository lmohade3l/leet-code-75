var asteroidCollision = function (asteroids) {
  let stack = [...asteroids];
  let n = asteroids.length - 1;

  while (n >= 0) {
    if (stack[n] * stack[n - 1] < 0) {
      const last = stack.pop();
      const onToLast = stack.pop();
      console.log({stack} , {last} , {onToLast})
      if (Math.abs(last) > onToLast) {
        stack.push(last);
      } else if (Math.abs(last) < onToLast) {
        stack.push(onToLast);
      } else if (Math.abs(last) == onToLast) {
        n--;
      }
    }
    console.log({stack})
    n--;
  }

  return stack;
};

console.log(asteroidCollision([10,2,-5]));
