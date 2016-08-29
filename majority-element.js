/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var result = 0
    var count = 0
    nums.forEach(item => {
        if(count === 0) {
            result = item
            count = 1
        } else if (item === result) {
            count += 1
        } else {
            count -= 1
        }
    })
    
    return result;
};