// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const inorderTraversal = function(root) {
    const result = []
    
    function helper(node) {
        if(node) {
            helper(node.left)
            result.push(node.val)
            helper(node.right)
        }
    }
    
    helper(root)
    return result  
};