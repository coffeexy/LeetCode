/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        a = a.toString()
        b = b.toString()
        
        if (a + b < b + a) return 1
        if (a + b > b + a) return -1
        return 0
    })
    return nums.join('').replace(/^0+/, 0)
};