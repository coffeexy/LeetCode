/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];
    for(let i = nums.length-1; i > 0; i--) {
        result = result^nums[i];
    }
    return result;
};