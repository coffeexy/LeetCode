/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return hammingWeight(~~(n/2)) + hammingWeight(n%2);
};