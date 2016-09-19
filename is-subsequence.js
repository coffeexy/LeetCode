/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var len = s.length
    var lent = t.length
    let i = 0
    for (let j = 0; i < len && j < lent;) {
        while (j < lent && t[j] !== s[i]) j++
        if (i < len && t[j] === s[i]) {
            i++
            j++
        }
    }
    if (i < len) return false
    return true
};