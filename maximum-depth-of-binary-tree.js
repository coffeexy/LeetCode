/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    var result = 1
    
    function me(node, depth) {
        left = depth
        right = depth
        if (!node.left && !node.right) {
            result = Math.max(depth, result)
        }
        if (node.left) left = me(node.left, depth + 1)
        if (node.right) right = me(node.right, depth + 1)
        return left > right ? left : right
    }
    me(root, 1)
    return result
};