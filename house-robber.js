/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    var sum = 0
    var result = 0
    
    function me(i) {
        // 选还是不选，取决于选了这个数，sum更大
        if(i >= nums.length) {
            result = Math.max(sum, result)
            return
        }
        // 不选
        me(i+1)
        // 选
        sum += nums[i]
        me(i+2)
        sum -= nums[i]
    }
    me(0)
    return result
};