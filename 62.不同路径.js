/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array(m + 1).fill(1);
  dp[0] = 0;
  for(let i = 1; i < n; i++) {
    for(let j = 1; j <= m; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
    console.log(dp);
  }
  return dp[m];
};
// @lc code=end

