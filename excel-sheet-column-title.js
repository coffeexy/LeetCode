/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    n = n - 1
    if (n < 26) return String.fromCharCode(n + 65)
    return convertToTitle(~~(n/26)) + String.fromCharCode(n%26 + 65)
};