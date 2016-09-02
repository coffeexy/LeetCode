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
 * 下次再写感觉要写不出来
 */
var isBalanced = function(root) {
    if (!root) return true
      
    if(Math.abs(depth(root.left) - depth(root.right)) > 1) {  
        return false;  
    } 
    return isBalanced(root.left) && isBalanced(root.right);
    
    function depth(node) {  
        if(!node) return 0
        return 1 + Math.max(depth(node.left), depth(node.right));  
    }
};