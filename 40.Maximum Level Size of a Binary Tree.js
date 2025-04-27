var maxLevelSum = function (root) {
  let maxSumLevel = 0;
  let maxSumLevelNumber = 0;
  const queue = [root];

  let trackNumber = 0;

  while (queue.length > 0) {
    let temp = 0;
    let tempNumber = 2 ** trackNumber;

    for (let i = 0; i < queue.length; i++) {
      temp += queue[i];
      const cur = queue.shift();

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    if (maxSumLevel < temp) {
      maxSumLevel = temp;
      maxSumLevelNumber = tempNumber;
    }
    trackNumber ++;
  }

  return Math.abs(Math.log(maxSumLevelNumber)) + 1
};
