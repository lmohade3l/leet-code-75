var leafSimilar = function (root1, root2) {
  let leaves1 = [];
  let leaves2 = [];

  function findLeaves(root, leaves) {
    if (root === null) {
    } else if (root.left === null && root.right === null) leaves.push(root.val);
    else {
      findLeaves(root.right, leaves);
      findLeaves(root.left, leaves);
    }
  }

  findLeaves(root1, leaves1);
  findLeaves(root2, leaves2);

  for (let i = 0; i < Math.max(leaves1.length, leaves2.length); i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }

  return true;
};
