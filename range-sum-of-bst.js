/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
// BST 左节点 < 中节点 < 右节点
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    function me(root) {
        // root.val>=L 提前结束左节点
        if(root.left && root.val>=L) {
           me(root.left);
        }
        // root.val<=R 提前结束右节点
        if(root.right && root.val<=R) {
           me(root.right);
        }
        if(root.val>=L && root.val<=R) {
            sum+=root.val;
        }
    }
    me(root);
    return sum;
};