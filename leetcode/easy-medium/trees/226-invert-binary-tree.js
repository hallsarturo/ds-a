// Given the root of a binary tree, invert the tree, and return its root.

import { tree1, tree2 } from './dummy-tree-class.js';

const invertTree = function (root) {
    if (!root) return (null[(root.left, root.right)] = [root.right, root.left]);
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

console.log('Tree 1:', invertTree(tree1));
console.log('Tree 2:', invertTree(tree2));
