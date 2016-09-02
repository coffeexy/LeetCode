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
var sumNumbers = function(root) {
    if (!root) return 0
    
    var sum = 0
    var item = []
    
    function me(node) {
        if (!node.left && !node.right) {
            item.push(node.val)
            sum += +item.join('')
            item.pop()
            return
        }
        if (node.left) {
            item.push(node.val)
            me(node.left)
            item.pop()
        }
        if (node.right) {
            item.push(node.val)
            me(node.right)
            item.pop()
        }
    }
    me(root)
    return sum
};