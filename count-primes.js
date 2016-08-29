/**
 * @param {number} n
 * @return {number}
 */

var isPrime = function (num) {
    if (num === 2) return true
    if (num%2 === 0) return false
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num%i === 0) return false
    }
    return true
}
var countPrimes = function(n) {
    if (n <= 1) return 0
    
    var sum = 0
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) sum++
    }
    
    return sum
    
};

/**
 * but 太慢了
 */