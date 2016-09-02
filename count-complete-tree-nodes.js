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
 * 太慢了！！！
 */
var countNodes = function(root) {
    if (!root) return 0
    
    var result = []
    var sum = 1
    function count(node){
        
        if (!node) return
        if (node.left && node.right) {
            sum += 2
            count(node.left)
            count(node.right)
        } else if (node.left) {
            sum += 1
        }
    }
    count(root)
    return sum
};

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
var countNodes = function(root) {
    if (!root) return 0
    
    var left = root.left, leftdepth = 1
    var right = root.right, rightdepth = 1
    
    while (left) {
        leftdepth++
        left = left.left
    }
    while (right) {
        rightdepth++
        right = right.right
    }
    
    if (leftdepth === rightdepth) return Math.pow(2, leftdepth) - 1
    
    return countNodes(root.left) + countNodes(root.right) + 1
};