/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    var len = nums.length
    if (len <= 1) return false
    
    var map = new Map()
    for (let i = 0; i < len; i++) {
        let key = nums[i]
        map.set(key, map.has(key) ? map.get(key) + 1 : 1)
    }
    
    for (let [key, value] of map) {
        if (value > 1) return true
    }
    return false
};

/**
 * 上面那个 map 做法要写成精了
 * 用set优化一下，一个遍历
 */
var containsDuplicate = function(nums) {
    var len = nums.length
    if (len <= 1) return false
    
    var map = new Set()
    for (let i = 0; i < len; i++) {
        let key = nums[i]
        if(map.has(key)) return true
        map.add(key)
    }
    return false
};