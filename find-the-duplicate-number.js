/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    var len = nums.length;
    var map = Array.from({ length: len+1 }, () => 0);
    for (let i = len - 1; i >= 0; i--) {
        map[nums[i]]++;
        if(map[nums[i]] > 1) return nums[i];
    }
};