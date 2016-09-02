/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    var len = nums.length
    if (len <= 1) return nums
    return buildtree(0, len-1)
    
    function buildtree(start, end) {
        if (start > end) return null
        
        var mid = ~~((start + end)/2)
        var node = new TreeNode(nums[mid])
        node.left = buildtree(start, mid-1)
        node.right = buildtree(mid+1, end)
        
        return node
    }
};
