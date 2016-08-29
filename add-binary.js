/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var a = a.split('')
    var b = b.split('')
    var result = []
    var temp = 0
    for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sumi = (+a[i] || 0) + (+b[j] || 0) + temp
        if (sumi >= 2) {
            temp = 1
            sumi = sumi - 2
        } else {
            temp = 0
        }
        result.unshift(sumi)
    }
    if (temp === 1) {
        result.unshift(1)
    }
    return result.join('')
};