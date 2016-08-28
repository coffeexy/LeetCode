/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    return !Boolean(n%2) && isPowerOfTwo(n/2);
    
};