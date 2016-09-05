/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    n = ~~(n/5)
    return n === 0 ? 0 : n + trailingZeroes(n);
};