/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    
    function me(left, right) {
        if ((!left && right) || (left && !right)) return false
        if (!left && !right) return true
        return left.val === right.val && me(left.left, right.right) && me(left.right, right.left)
    }
    return me(root.left, root.right)
};