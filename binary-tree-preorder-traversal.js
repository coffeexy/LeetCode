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
var preorderTraversal = function(root) {
    if (!root) return []
    var result = []
    
    function me(node) {
        if (!node) return
        result.push(node.val)
        me(node.left)
        me(node.right)
    }
    
    me(root)
    return result
};