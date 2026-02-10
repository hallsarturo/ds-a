// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

import { tree12, tree13, tree14, tree15 } from './dummy-tree-class.js';

const isValidBST = function (root) {
    const inorderArr = [];
    inorderTraversal(root);
    function inorderTraversal(current) {
        if (current) {
            inorderTraversal(current.left);
            inorderArr.push(current.val);
            inorderTraversal(current.right);
        }
    }

    for (let i = 1; i < inorderArr.length; i++) {
        if (inorderArr[i - 1] >= inorderArr[i]) return false;
    }
    return true;
};

console.log(isValidBST(tree12));
console.log(isValidBST(tree13));
console.log(isValidBST(tree14));
console.log(isValidBST(tree15));
