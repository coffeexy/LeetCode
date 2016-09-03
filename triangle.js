/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var len = triangle.length
    var result = 0
    
    function me(sum) {
        var l = sum.length
        if (l === len) {
            result = Math.min(...sum)
            return
        }
        triangle[l][0] += sum[0]
        
        for (let i = 1, len = triangle[l].length; i < len-1; i++) {
            triangle[l][i] += Math.min(sum[i], sum[i-1])
        }
        
        triangle[l][l] += sum[l-1]
        me(triangle[l])
    }
    me(triangle[0])
    
    return result
};