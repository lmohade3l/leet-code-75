var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (p === root || q === root) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;

  return left !== null ? left : right;
};
