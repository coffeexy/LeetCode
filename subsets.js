/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var len = nums.length
    var result = []
    var item = new Set();
    
    function me(i) {
        if (i === len) {
            result.push(Array.from(item));
            return;
        }
        // 不取第i个元素
        me(i + 1)
        // 取第i个元素
        item.add(nums[i])
        me(i + 1)
        item.delete(nums[i])
    }
    
    me(0)
    return result
};