/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var len = magazine.length
    var map = []
    for (let i = len - 1; i >= 0; i--) {
        let key = magazine[i]
        map[key] = map[key] ? map[key] + 1 : 1
    }
    for (let j = ransomNote.length - 1; j >= 0; j--) {
        let key = ransomNote[j]
        if (isNaN(map[key]) || --map[key] < 0) return false
    }
    return true
};