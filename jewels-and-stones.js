/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// indexOf 时间复杂度O(n)
// 适合字符串长度不大
var numJewelsInStones = function(J, S) {
    let lenJ = J.length;
    let lenS = S.length;
    let sum = 0;
    if(lenJ && lenS) {
        for(let i=0; i<lenS; i++) {
            if(J.indexOf(S[i])>=0) sum+=1;
        }
    }
    return sum;
};

// Set.has 时间复杂度O(1)
// var numJewelsInStones = function(J, S) {
//     let setJ = new Set(J.split(''));
//     let lenS = S.length;
//     let sum = 0;
//     if(setJ.size && lenS) {
//         for(let i=0; i<lenS; i++) {
//             if(setJ.has(S[i])) sum+=1;
//         }
//     }
//     return sum;  
// };
