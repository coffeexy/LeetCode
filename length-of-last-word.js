/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    var len = s.length
    if (len <= 1) return len
    
    let i = len - 1
    for (; i >= 0; i--) {
        if (s[i] === ' ') return len - i - 1
    }
    return len
};