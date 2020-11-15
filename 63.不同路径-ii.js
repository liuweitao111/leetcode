/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const len1 = obstacleGrid.length;
  if(!len1) {
    return 0;
  }
  const len2 = obstacleGrid[0].length;
  const dp = Array(len2).fill(0);
  dp[0] = 1;
  for(let i = 0; i < len1; i++) {
    dp[0] = obstacleGrid[i][0] === 1 ? 0 : dp[0];
    for(let j = 1; j < len2; j++) {
      dp[j] = obstacleGrid[i][j] === 1 ? 0 : dp[j] + dp[j - 1];
    }
  }
  return dp[len2 - 1];
};
// @lc code=end

