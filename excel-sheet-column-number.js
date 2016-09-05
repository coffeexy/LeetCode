/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length
    var result = 0
    for (let i = 0; i < len; i++) {
        let x = s.charCodeAt(i) - 64
        result += x * Math.pow(26, len-1-i)
    }
    return result
};