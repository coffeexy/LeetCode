/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length
    var max = Array.from({ length: len })
    var result = 0
    
    max[len-1] = prices[len-1]
    for (let i = len - 2; i >= 0; i--) {
        max[i] = Math.max(max[i+1], prices[i])
    }
    
    for (let i = 0; i < len - 1; i++) {
        result = Math.max(result, max[i+1] - prices[i])
    }
    return result
};