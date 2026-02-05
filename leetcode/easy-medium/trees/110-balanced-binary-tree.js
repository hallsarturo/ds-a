// Given a binary tree, determine if it is height-balanced.

import { tree5, tree6 } from './dummy-tree-class.js';

const isBalanced = function (root) {
    function nodeHeight(node) {
        if (!node) return 0;

        const leftHeight = nodeHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = nodeHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return nodeHeight(root) === -1 ? false : true;
};

console.log(isBalanced(tree5));
console.log(isBalanced(tree6));
