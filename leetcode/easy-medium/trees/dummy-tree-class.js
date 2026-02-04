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