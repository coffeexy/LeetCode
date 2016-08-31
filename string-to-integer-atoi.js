/**
 * @param {string} str
 * @return {number}
 */
const MAX = 2147483647
const MIN = -2147483648
var myAtoi = function(str) {
    str = str.trim()
    str = str.match(/^[-\+]?\d+/)
    str = Number(str)
    if (isNaN(str)) return 0
    if (str > MAX) return MAX
    if (str < MIN) return MIN
    return str
};