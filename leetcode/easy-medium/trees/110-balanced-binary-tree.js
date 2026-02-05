// Given a binary tree, determine if it is height-balanced.

import { tree5, tree6 } from './dummy-tree-class.js';

const isBalanced = function (root) {
    let isBalanced = true;
    function nodeHeight(node) {
        if (!node) return 0;

        const leftHeight = nodeHeight(node.left);
        const rightHeight = nodeHeight(node.right);

        if (leftHeight - rightHeight > 1 || leftHeight - rightHeight < -1) {
            isBalanced = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    nodeHeight(root);
    return isBalanced;
};

console.log(isBalanced(tree5));
console.log(isBalanced(tree6));
