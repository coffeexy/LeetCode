/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    
    var result = []
    
    function depth(node, d) {
        if (!node) return
        
        if (!result[d]) result[d] = []
        result[d].push(node.val)
        
        d++
        
        depth(node.left, d)
        depth(node.right, d)
    }
    depth(root, 0)
    
    for (let i = 1, len = result.length; i < len; i+=2) {
        result[i] = result[i].reverse()
    }
    
    return result
};