/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    if (!root) return []
    var result = []
    var item = []
    
    function me(node) {
        if (!node.left && !node.right) {
            item.push(node.val)
            result.push(item.join('->'))
            
            // 每次要删掉！！！
            item.pop()
            return
        }
        
        if (node.left) {
            item.push(node.val)
            me(node.left)
            
            // 每次要删掉！！！
            item.pop()
        }
        if (node.right) {
            item.push(node.val)
            me(node.right)
            
            // 每次要删掉！！！
            item.pop()
        }
        
    }
    
    me(root)
    return result
};