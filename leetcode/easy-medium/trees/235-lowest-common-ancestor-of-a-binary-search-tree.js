// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

import { tree10, tree11 } from './dummy-tree-class.js';

const lowestCommonAncestor = function (root, p, q) {
    return recursion(root, p, q);

    function recursion(current, p, q) {
        // case p,q are different subtrees, current is LCA
        if ((p < current.val && q > current.val) || (p > current.val && q < current.val)) {
            return current.val;
        } // case both nodes are in left subTree
        else if (p < current.val && q < current.val) {
            if (p === current.val || q === current.val) {
                return current.val;
            }
            return recursion(current.left, p, q);
        } else if (p > current.val && q > current.val) {
            if (p === current.val || q === current.val) {
                return current.val;
            }
            return recursion(current.right, p, q);
        }
    }
};

console.log(lowestCommonAncestor(tree10, 2, 8));
console.log(lowestCommonAncestor(tree10, 2, 4));
console.log(lowestCommonAncestor(tree11, 2, 1));
