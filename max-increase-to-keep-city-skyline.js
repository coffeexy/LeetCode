/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let sum = 0;
  let maxi = [];
  let maxj = [];
  let len = grid.length;

  // find the top of 2side
  for(let i=0; i<len; i++) {
      
      maxi[i] = Math.max(...grid[i]);
      maxj[i] = grid[0][i];
      
      for(let j=0; j<len; j++) {
          maxj[i] = maxj[i] < grid[j][i] ? grid[j][i] : maxj[i];
          sum-=grid[j][i];
      }
  }
  
  for(let i=0; i<len; i++) {
      for(let j=0; j<len; j++) {
          sum += Math.min(maxi[i], maxj[j]);
      }
  }
  
  return sum;
  
};