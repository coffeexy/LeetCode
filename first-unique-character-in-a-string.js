/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length
    var map = new Map()
    for (let i = 0; i < len; i++) {
        var key = s[i]
        map.set(key, map.has(key) ? map.get(key) + 1 : 1)
    }
    for (let i = 0; i < len; i++) {
        if (map.get(s[i]) === 1) return i
    }
    return -1
};