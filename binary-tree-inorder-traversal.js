/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return []
    var result = []
    
    function me(node) {
        if (!node) return
        me(node.left)
        result.push(node.val)
        me(node.right)
    }
    
    me(root)
    return result
};