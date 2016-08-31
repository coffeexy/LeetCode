/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    x = x + ''
    for (let i = 0, j = x.length - 1; i < j; i++, j--) {
        if (x[i] !== x[j]) return false
    }
    return true
};