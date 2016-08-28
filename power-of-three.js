/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    return !Boolean(n%3) && isPowerOfThree(n/3); 
};