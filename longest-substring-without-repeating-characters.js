/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = ''
    var count = 0
    var len = s.length
    for (let i = 0; i < len; i++) {
        let index = result.indexOf(s[i])
        if (index >= 0) {
            count = Math.max(count, result.length)
            result = result.slice(index+1) + s[i]
        } else {
            result += s[i]
        }
    }
    return Math.max(count, result.length)
};