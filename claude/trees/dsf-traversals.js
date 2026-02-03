class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    const result = [];
    recursiveTraverse(root);

    function recursiveTraverse(currentNode) {
        if (!currentNode) {
            return result;
        } else {
            recursiveTraverse(currentNode.left);
            result.push(currentNode.val);
            recursiveTraverse(currentNode.right);
        }
    }

    return result;
}
