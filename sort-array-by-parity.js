/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let len = A.length;
  for(let i=0, j=len-1; i<j;) {
      if(A[i]%2===1 && A[j]%2===0) {
          let temp = A[i];
          A[i] = A[j];
          A[j] = temp;
          i++;
          j--;
      }
      if(A[i]%2===0) i++;
      if(A[j]%2===1) j--;
  }
  return A;
};