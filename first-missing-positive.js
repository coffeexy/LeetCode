/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var a = [];
    var result = 1;
    for(let i = nums.length-1; i >= 0; i--) {
        if (nums[i] > 0) {
            a.push(nums[i]);
        }
    }
    while(a.indexOf(result)>=0) {
        result++;
    }
    return result;
};