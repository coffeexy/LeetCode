/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  function me(node) {
      if(!node) return new TreeNode(val)
      if(node.val>val) node.left = me(node.left)
      if(node.val<val) node.right = me(node.right)
      return node
  }
  return me(root)
};