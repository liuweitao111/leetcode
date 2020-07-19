/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const dp:number[][] = [];
  const y = grid.length;
  const x = grid[0].length;
  dp[0] = [grid[0][0]];
  for(let i = 1; i < y; i++) {
    dp[i] = [dp[i - 1][0] + grid[i][0]];
  }
  for(let j = 1; j < x; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for(let i = 1; i < y; i++) {
    for(let j = 1; j < x; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[y - 1][x - 1];
};
// @lc code=end

