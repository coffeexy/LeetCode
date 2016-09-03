/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var a = [1]
    var result = []
    
    for(let i = 0; i< numRows; i++) {
        signle(i)
        result.push(Array.from(a))
    }
    
    function signle(num) {
        if (num === 0) return
        var b = Array.from(a)
        
        a[0] = 1
        for (let i = 1; i < num; i++) {
            a[i] = b[i] + b[i-1]
        }
        a[num] = 1
    }
    
    return result
    
};