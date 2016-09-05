/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length
    if (len <= 1) return false
    
    var map = new Map()
    for (let i = 0; i < len; i++) {
        let key = nums[i]
        if (map.has(key) && i-map.get(key) <= k) return true
        map.set(key, i)
    }
    return false
};