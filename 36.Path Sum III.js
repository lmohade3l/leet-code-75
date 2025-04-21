var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let total = 0;

  function dfs(node, currentSum) {
    if (!node) return;

    currentSum += node.val;
    if (currentSum === targetSum) {
      total++;
    }
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  }

  function exploreAllNodes(node) {
    if (!node) return;
    dfs(node, 0);

    exploreAllNodes(node.left);
    exploreAllNodes(node.right);
  }

  exploreAllNodes(root);
  return total;
};
