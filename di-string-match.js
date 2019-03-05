/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let len = S.length
    let A = []
    let x = 0
    let y = len
    
    for (let i=0; i<len;i++) {
        if(S[i] === 'I') {
            A.push(x)
            x++
        }
        if(S[i] === 'D') {
            A.push(y)
            y--
        }
    }
    A.push(x)
    
    return A
};