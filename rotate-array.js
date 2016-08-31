/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length
    var before = nums.splice(len-k, k)
    nums.splice(0, 0, ...before)
};