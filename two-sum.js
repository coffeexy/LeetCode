/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    
    var len = numbers.length
    
    for (let i = 0; i < len - 1; i++) {
        var temp = target - numbers[i]
        var index = numbers.indexOf(temp, i+1)
        if (index > 0) return [i, index]
    }
};