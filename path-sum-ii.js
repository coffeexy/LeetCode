/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return []
    
    var result = []
    var item = []
    var s = 0
    
    
    function me(node) {
        if (!node.left && !node.right) {
            item.push(node.val)
            s += node.val
            
            // 太特么坑爹了！result.push(item)，丢进去的是item引用，一旦item做了操作，result里的数据也会被改动！什么鬼！
            // copy一个元素丢进去才行
            if (s == sum) result.push(Array.from(item))
            
            // 每次要删掉！！！
            item.pop()
            s -= node.val
            return
        }
        
        if (node.left) {
            item.push(node.val)
            s += node.val
            me(node.left)
            
            // 每次要删掉！！！
            item.pop()
            s -= node.val
        }
        if (node.right) {
            item.push(node.val)
            s += node.val
            me(node.right)
            
            // 每次要删掉！！！
            item.pop()
            s -= node.val
        }
    }
    
    
    me(root)
    return result
};