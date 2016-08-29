/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var array = str.split(' ')
    var len = array.length
    if (len !== pattern.length) return false
    
    var map = new Map()
    for (let i = 0; i < len; i++) {
        let p = 'key' + pattern.substr(i, 1)
        let s = array[i]
        if (map.has(s) && map.get(s) !== p) return false
        if (map.has(p) && map.get(p) !== s) return false
        map.set(s, p)
        map.set(p, s)
    }
    return true
};