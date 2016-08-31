/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var len = s.length
    if (len < 1) return true
    
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    len = s.length
    for (let i = 0, j = len - 1; i <= j; i++, j--) {
        if (s[i] !== s[j]) return false
    }
    return true
};