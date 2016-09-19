/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (k === 1) return Math.max(...nums)
    var len = nums.length
    if (k === len) return Math.min(...nums)
    
    nums.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
    return nums[len - k]
    
};
/**
 * 这题快排应该怎么做？
 */
