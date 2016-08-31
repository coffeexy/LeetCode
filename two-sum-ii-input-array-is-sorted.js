/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    
    var len = numbers.length
    var prev = null
    if (numbers[0] === numbers[1] && 2*numbers[0] === target) {
        prev = numbers[0]
        return [1, 2]
    }
    
    for (let i = 0; i < len - 1; i++) {
        if (numbers[i] > target) return []
        if (numbers[i] === prev) continue;
        
        var temp = target - numbers[i]
        var index = numbers.indexOf(temp, i+1)
        if (index > 0) return [i+1, index+1]
        prev = numbers[i]
    }
};