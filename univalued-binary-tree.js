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
var isUnivalTree = function(root) {
    let result = true
    function me(node, val) {
        if(node.val!==val) result = false
        // 优化：只有当result为true时才继续递归，减少遍历
        if(node.left) me(node.left, val)
        if(node.right) me(node.right, val)
    }  
    if(!root) return true;
    me(root, root.val)
    return result
};