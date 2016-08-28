/**
 * @param {number} num
 * @return {number[]}
 */
var countBit = function(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return countBit(~~(num/2)) + countBit(num%2);
};
var countBits = function(num) {
    var result = [];
    for(let i = 0; i <= num; i++) {
        result.push(countBit(i));
    }
    return result;
};