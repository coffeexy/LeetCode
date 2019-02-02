/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let s = new Set()
  let len = A.length
  for(let i=0; i<len; i++) {
      if(s.has(A[i])) return A[i]
      s.add(A[i])
  }
  return 0
};