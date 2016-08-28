/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var result = 0;
    for(let i = 0; i < 32; i++) {
        if(n%2) {
            result += Math.pow(2, 31-i);
        };
        n = ~~(n/2);
    }
    return result;
};