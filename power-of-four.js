/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    return !Boolean(n%4) && isPowerOfFour(n/4);
};