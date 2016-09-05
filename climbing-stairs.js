/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = 0
    function me(num) {
        if (num === 0 || num === 1) {
            result++
            return
        }
        me(num-2)
        me(num-1)
    }
    me(n)
    return result  
};
/**
 * 递归的做法，有点慢，超时了
 * 第n个等于，第n-1 和 n-2 的和
 * 斐波那契数列
 */
var climbStairs = function(n) {
    if(n <= 2) return n
    return climbStairs(n-1) + climbStairs(n-2)
};

var climbStairs = function(n) {
    if(n <= 3) return n
    var a = 2
    var b = 3
    var result = 5
    for (let i = 5; i <= n; i++) {  
        a = result;  
        result += b;  
        b = a;
    }  
    return result;
};
