/**
 * @param {number[]} nums
 * @return {number}
 */
var sum = function(nums) {
    var result = nums[0];
    for (let i = nums.length - 1; i > 0; i--) {
        result += nums[i];
    }
    return result;
};
var missingNumber = function(nums) {
    var n = nums.length;
    return n*(n + 1)/2 - sum(nums);
};


/**
 * @param {number[]} nums
 * @return {number}
 * use singleNumber to find the missing number
 */ 
var singleNumber = function(nums) {
    var result = nums[0];
    for(let i = nums.length-1; i > 0; i--) {
        result = result^nums[i];
    }
    return result;
};
var missingNumber = function(nums) {
    for(let i = nums.length; i >= 0; i--) {
        nums.push(i);
    }
    return singleNumber(nums);
};