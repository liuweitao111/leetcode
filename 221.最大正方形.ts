/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */
// 状态定义
// 当前点为正方形右下方的顶点时， 正方形的最大边长
// 递推方程
// dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
// @lc code=start
function maximalSquare(matrix: string[][]): number {
  const y = matrix.length;
  if(y === 0) {
    return 0;
  }
  const x = matrix[0].length;
  const dp: number[][] = Array.from({ length: y }).map((v, i) => [
    Number(matrix[i][0]),
  ]);

  for(let j = 1; j < x; j++) {
    dp[0][j] = Number(matrix[0][j]);
  }

  for(let i = 1; i < y; i++) {
    for(let j = 1; j < x; j++) {
      if(matrix[i][j] === '0') {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  const maxLength = Math.max(...dp.map(d => Math.max(...d)));
  return maxLength * maxLength;
}

// @lc code=end
