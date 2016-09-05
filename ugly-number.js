/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 1 || num === 2 || num === 3 || num === 5) return true
    if (num <= 0) return false
    
    while(num) {
        if (num === 1 || num === 2 || num === 3 || num === 5) return true
        if (num%2 && num%3 && num%5) return false
        if (num%2 === 0) num = num/2
        else if (num%3 === 0) num = num/3
        else if (num%5 === 0) num = num/5
    }
    return true
};