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
var rightSideView = function(root) {
    if (!root) return []
    
    var result = []
    
    function depth(node, d) {
        if (!node) return
        
        if (!result[d]) result[d] = node.val
        d++
        
        // 注意这里是先right 后left
        // 如果先left，后right，则20行可以写为：
        // result[d] = node.val
        depth(node.right, d)
        depth(node.left, d)
        
    }
    depth(root, 0)
    
    return result
};