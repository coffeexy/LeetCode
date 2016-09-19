/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map()
    var result = []
    var stack = []
    
    for (let i = nums.length - 1; i >= 0; i--) {
        var key = nums[i]
        map.set(key, map.has(key) ? map.get(key) + 1 : 1)
    }
    
    if (k === map.size) return [...map.keys()]
    for (let [key, value] of map) {
        if (!stack[value]) stack[value] = []
        stack[value].push(key)
    }
    for (let i = stack.length - 1; i >= 0 && k > result.length; i--) {
        if (stack[i]) result.push(...stack[i])
    }
    while (k < result.length) result.shift()
    return result
};