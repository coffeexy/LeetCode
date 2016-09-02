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
 *
 *
 * 不把d作为全局变量而是一个参数传入递归函数
 */
var levelOrder = function(root) {
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
    
    return result
};