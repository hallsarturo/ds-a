// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example1
const root = [3, 9, 20, null, null, 15, 7];
// Output: 3

// Example 2:
const root2 = [1, null, 2];
// Output: 2

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = left === undefined ? null : right;
    }
}

// Helper function to build tree from array (level-order)
function buildTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();

        // Add left child
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        // Add right child
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

// Build your test trees
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
const tree2 = buildTree([1, null, 2]);

const maxDepth = function (root) {
    // Implement a DFS, traverse all the tree
    if (root) {
        return preorderTraversal(root, 0);
    } else {
        return 0;
    }

    function preorderTraversal(currentNode, currentDepth) {
        if (currentNode) {
            currentDepth++;
            return Math.max(
                preorderTraversal(currentNode.left, currentDepth),
                preorderTraversal(currentNode.right, currentDepth)
            );
        } else {
            return currentDepth;
        }
    }
};

console.log('Tree 1 depth:', maxDepth(tree1)); // Should be 3
console.log('Tree 2 depth:', maxDepth(tree2)); // Should be 2


// or: Alternative (building depth up):

function maxDepth(node) {
    if (!node) return 0;
    
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}