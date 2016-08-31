/**
 * @param {number} x
 * @return {number}
 */
 
const MAX = 2147483647
const MIN = -2147483648

var reverse = function(x) {
    var result = 0
    while (x !== 0) {
        result = result*10 + x%10
        x = ~~(x/10)
    }
    
    
    if (result > MAX) return 0
    if (result < MIN) return 0
    return result
};