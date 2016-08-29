/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = new Map()
    var result = []
    var len =nums.length
    
    nums.forEach(key => {
        map.set(key, map.has(key) ? map.get(key) + 1 : 1)
    })
    
    for (let [key, value] of map) {
      if (value > len/3) result.push(key)
    }
    return result;
};