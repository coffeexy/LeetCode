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
var levelOrderBottom = function(root) {
    if (!root) return []
    
    var result = []
    var i = 0
    
    function depth(node, d) {
        if (!node) return
        
        if (!result[d]) result[d] = []
        result[d].push(node.val)
        d++
        
        depth(node.left, d)
        depth(node.right, d)
        
    }
    depth(root, 0)
    
    return result.reverse()
};