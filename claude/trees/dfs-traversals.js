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
        if (currentNode) {
            recursiveTraverse(currentNode.left);
            result.push(currentNode.val);
            recursiveTraverse(currentNode.right);
        }
    }

    return result;
}

function preorderTraversal(root) {
    const result = [];
    recursion(root);

    function recursion(currentNode) {
        if (currentNode) {
            result.push(currentNode.val);
            recursion(currentNode.left);
            recursion(currentNode.right);
        }
    }
    return result;
}
function postorderTraversal(root) {
    const result = [];
    recursion(root);

    function recursion(currentNode) {
        if (currentNode) {
            recursion(currentNode.left);
            recursion(currentNode.right);
            result.push(currentNode.val);
        }
    }
    return result;
}
