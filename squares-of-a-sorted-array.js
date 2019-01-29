/**
 * @param {number[]} A
 * @return {number[]}
 */
// NlgN
// var sortedSquares = function(A) {
//     let len = A.length;
//     let result = []
//     for(let i=0; i<len; i++) {
//         result.push(A[i]*A[i])
//     }
//     return result.sort((a, b) => a-b)
// };

// lgN
var sortedSquares = function(A) {
  let len = A.length
  let result = []
  let j = 0;
  let i = j-1
  for(; j<len; j++) {
      if(A[j]>=0) break;
  }
  i=j-1;
  do{
      if(j>=len || (!!A[i] && -A[i]<A[j])) {
          result.push(A[i]*A[i])
          i--
      } else {
          result.push(A[j]*A[j])
          j++
      }
  }while(result.length < len)
  return result
};