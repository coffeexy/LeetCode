/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false
    
    var s = 0
    var result = false
    
    function me(node) {
        if (!node.left && !node.right) {
            s += node.val
            if (s === sum) result = true
            
            s -= node.val
            return
            
        }
        if (node.left) {
            s += node.val
            me(node.left)
            s -= node.val
        }
        if (node.right) {
            s += node.val
            me(node.right)
            s -= node.val
        }
    }
    me(root)
    return result
};