/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let len = A.length;
    
    var flipAndInvert = function(array) {
        let result = []
        for(let j=array.length-1; j>=0; j--) {
            result.push(1^array[j])
        }
        return result
    }
    
    for(let i=0; i<len; i++) {
        A[i] = flipAndInvert(A[i])
    }
    return A;
};