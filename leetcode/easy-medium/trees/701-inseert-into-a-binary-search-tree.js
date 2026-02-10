// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

import { tree16 } from './dummy-tree-class.js';

const insertIntoBST = function (root, val) {
    if (!root) {
        return root = new TreeNode(val);
    }
    // Recursive case: go left or right
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
};
    

console.log(insertIntoBST(tree16, 5));
