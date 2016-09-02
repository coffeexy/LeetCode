/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

// 1的进阶版
// 但素人家做1的时候就考虑了空结点，呵呵。。。
// 直接代码copy了

var connect = function(root) {
    if (root) root.next = null
    
    var result = []
    function depth(node, d) {
        
        if (result[d]) {
            result[d].next = node // 可能等于null
        }
        if (!node) return
        
        result[d] = node
        d++
        depth(node.left, d)
        depth(node.right, d)
        
    }
    depth(root, 0)
};