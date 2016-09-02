/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
/**
* 可以直接 nums.sort() 呵呵投机取巧
* 
*/
var sortColors = function(nums) {
    var len = nums.length
    var red = 0
    var blue = len - 1
    
    while (nums[red] === 0) red++
    while (nums[blue] === 2) blue--
    
    for (let i = 0; i < len; ) {
        if (red > blue) break
        if (nums[i] === 0 && i > red) {
            [nums[i], nums[red]] = [nums[red], nums[i]]
            red++
        } else if (nums[i] === 2 && i < blue) {
            [nums[i], nums[blue]] = [nums[blue], nums[i]]
            blue--
        } else {
            i++
        }
        
    }
};