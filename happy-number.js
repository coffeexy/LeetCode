/**
 * @param {number} n
 * @return {boolean}
 */


var isHappy = function(n) {
    var map = new Set()
    
    function me(n) {
        if (n===1) return true
        
        var result = 0
        if (map.has(n)) return false
        
        map.add(n)
        
        while (n) {
            result += Math.pow(n%10, 2)
            n = ~~(n/10)
        }
        
        return me(result)
    }
    
        
    return me(n)
};