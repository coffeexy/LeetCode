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
var minDepth = function(root) {
    if (!root) return 0
    // 此处填坑。因为取最小值，这个参照要设大一点
    var result = Number.POSITIVE_INFINITY
    
    function me(node, depth) {
        left = depth
        right = depth
        if (!node.left && !node.right) {
            result = Math.min(depth, result)
        }
        if (node.left) left = me(node.left, depth + 1)
        if (node.right) right = me(node.right, depth + 1)
        return left < right ? left : right
    }
    me(root, 1)
    return result
};