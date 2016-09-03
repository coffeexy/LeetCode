/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var a = [1]
    
    for(let i = 1; i<= rowIndex; i++) {
        var b = Array.from(a)
        
        a[0] = 1
        for (let j = 1; j < i; j++) {
            a[j] = b[j] + b[j-1]
        }
        a[i] = 1
    }
    
    return a
};