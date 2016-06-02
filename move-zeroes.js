/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0;
    var j = 0;
    var len = nums.length-1;
    while(j<=len) {
       if(nums[j]) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
        j++;
    }
    while(i<j) {
        nums[i] = 0;
        i++;
    }

};
