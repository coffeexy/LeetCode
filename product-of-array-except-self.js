/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length
    var result = Array.from({ length : len }, () => 1)
    
    if (len < 1) return result
    
    for (let i = 1; i < len; i++) {
        result[i] *= nums[i-1] * result[i-1]
    }
    var item = 1
    for (let j = len - 2; j >= 0; j--) {
        item *= nums[j+1]
        result[j] *= item
    }
    
    return result
};