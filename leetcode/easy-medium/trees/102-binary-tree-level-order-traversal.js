// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

import { tree1, tree7, tree8, tree9 } from './dummy-tree-class.js';

const levelOrder = function (root) {
    if (!root) return [];
    const result = [];

    // simulate deque
    const deque = [];
    deque.push(root);

    while (deque.length > 0) {
        const levelSize = deque.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = deque.shift();
            currentLevel.push(node.val);

            if (node.left) {
                deque.push(node.left);
            }
            if (node.right) {
                deque.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
};

console.log(levelOrder(tree1));
// Tree1 Output: [[3],[9,20],[15,7]]
console.log(levelOrder(tree7));
// Tree7 Output: [[1]]
console.log(levelOrder(tree8));
// Tree8 Output: []
console.log(levelOrder(tree9));
// Tree8 Output: [[1],[2,3],[4,5]]
