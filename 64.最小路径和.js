/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(!grid.length) {
    return 0;
  }
  const dp = [0];
  for(let j = 0; j < grid[0].length; j++) {
    dp[j + 1] = dp[j] + grid[0][j];
  }
  dp[0] = Infinity;
  for(let i = 1; i < grid.length; i++) {
    for(let j = 1; j <= grid[i].length; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j - 1];
    }
  }
  return dp[grid[0].length];
};
// @lc code=end

