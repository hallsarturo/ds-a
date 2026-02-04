// Given the root of a binary tree, invert the tree, and return its root.

import { tree1, tree2 } from './dummy-tree-class.js';

const invertTree = function (root) {
    function recursion(node) {
        if (node) {
            [node.left, node.right] = [node.right, node.left];
            recursion(node.left);
            recursion(node.right);
            return node;
        }
        return null
    }
    return recursion(root);
};

console.log('Tree 1:', invertTree(tree1));
console.log('Tree 2:', invertTree(tree2));
