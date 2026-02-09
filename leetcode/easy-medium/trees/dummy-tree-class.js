export class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = left === undefined ? null : right;
    }
}

// Helper function to build tree from array (level-order)
export default function buildTree(arr) {
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
export const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
export const tree2 = buildTree([1, null, 2]);
export const tree3 = buildTree([1, 2, 3, 4, 5]);
export const tree4 = buildTree([
    4,
    -7,
    -3,
    null,
    null,
    -9,
    -3,
    9,
    -7,
    -4,
    null,
    6,
    null,
    -6,
    -6,
    null,
    null,
    0,
    6,
    5,
    null,
    9,
    null,
    null,
    -1,
    -4,
    null,
    null,
    null,
    -2,
]);
export const tree5 = buildTree([3, 9, 20, null, null, 15, 7]);
export const tree6 = buildTree([1, 2, 2, 3, 3, null, null, 4, 4]);
export const tree7 = buildTree([1]);
export const tree8 = buildTree([]);
export const tree9 = buildTree([1, 2, 3, 4, null, null, 5]);
export const tree10 = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
export const tree11 = buildTree([2, 1]);
