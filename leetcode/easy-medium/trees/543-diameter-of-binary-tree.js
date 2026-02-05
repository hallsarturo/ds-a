// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

import { tree1, tree2, tree3 } from './dummy-tree-class.js';

const diameterOfBinaryTree = function (root) {
    function edgeHeight(node) {
        if (!node || (!node.left && !node.right)) return 0;

        const leftHeight = edgeHeight(node.left);
        const rightHeight = edgeHeight(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    const leftSubTreeHeight = edgeHeight(root.left);
    const rightSubTreeHeight = edgeHeight(root.right);

    return leftSubTreeHeight + rightSubTreeHeight + 1;
};

console.log(diameterOfBinaryTree)