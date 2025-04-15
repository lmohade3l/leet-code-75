var goodNodes = function (root) {
  function dfs(node, maxSoFar) {
    if (node === null) return 0;
    let count = node.val >= maxSoFar ? 1 : 0;
    let newMax = Math.max(node.val, maxSoFar);
    count += dfs(node?.left, newMax);
    count += dfs(node?.right, newMax);

    return count;
  }

  return dfs(root , -Infinity)
};
