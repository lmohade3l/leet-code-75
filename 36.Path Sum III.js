var pathSum = function (root, targetSum) {
  //   if (!root) return 0;
  //   let total = 0;

  //   function dfs(node, currentSum) {
  //     if (!node) return;

  //     currentSum += node.val;
  //     if (currentSum === targetSum) {
  //       total++;
  //     }
  //     dfs(node.left, currentSum);
  //     dfs(node.right, currentSum);
  //   }

  //   function exploreAllNodes(node) {
  //     if (!node) return;
  //     dfs(node, 0);

  //     exploreAllNodes(node.left);
  //     exploreAllNodes(node.right);
  //   }

  //   exploreAllNodes(root);
  //   return total;

  if (!root) return 0;
  const prefixSum = new Map();

  // we have one path that sum of the values from root to the end of the path is 0 (the root itself)
  prefixSum.set(0, 1);

  let totalPaths = 0;

  function dfs(node, currentSum) {
    if (!node) return;
    currentSum += node.val;

    totalPaths += prefixSum.get(currentSum - targetSum) || 0;
    prefixSum.set(currentSum, prefixSum.get(currentSum) || 0 || 0);

    dfs(node.left, currentSum);
    dfs(node.right, currentSum);

    // back track
    prefixSum.set(currentSum, prefixSum.get(currentSum) - 1);
  }

  dfs(root, 0);
};
