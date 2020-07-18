/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const dp:number[] = [];
  dp[0] = triangle[0][0];
  for(let i = 1; i < triangle.length; i++) {
    let len = triangle[i].length;
    let tmp = dp[0];
    dp[0] = dp[0] + triangle[i][0];
    for(let j = 1; j < len - 1; j++) {
      const minSum = Math.min(dp[j] + triangle[i][j], tmp + triangle[i][j]);
      tmp = dp[j];
      dp[j] = minSum;
    }
    dp[len - 1] = tmp + triangle[i][len - 1];
  }
  return Math.min(...dp);
};
// @lc code=end

