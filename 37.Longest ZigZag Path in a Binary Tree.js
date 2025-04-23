var longestZigZag = function (root) {
  if (!root) return;
  let maxLength = 0;

  function dfs(node, isGoingLeft, currentLength) {
    maxLength = Math.max(maxLength, currentLength);

    if (isGoingLeft) {
      if (node.left) dfs(node.left, false, currentLength + 1);
      if (node.right) dfs(node.right, true, 1);
    } else {
      if (node.left) dfs(node.left, false, 1);
      if (node.right) dfs(node.right, true, currentLength + 1);
    }
  }

  dfs(root, true, 0);
  dfs(root, false, 0);

  return maxLength;
};
