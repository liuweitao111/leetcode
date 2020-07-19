/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp:number[][] = [];
  const y = obstacleGrid.length;
  const x = obstacleGrid[0].length;
  let flag = false;
  for(let i = 0; i < y; i++) {
    dp[i] = !flag && !obstacleGrid[i][0] ? [1] : [0];
    if(!flag && obstacleGrid[i][0]) {
      flag = true;
    }
  }
  flag = false;
  for(let j = 0; j < x; j++) {
    dp[0][j] = !flag && !obstacleGrid[0][j] ? 1 : 0;
    if(!flag && obstacleGrid[0][j]) {
      flag = true;
    }
  }
  for(let i = 1; i < y; i++) {
    for(let j = 1; j < x; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[y - 1][x - 1];
};
// @lc code=end

