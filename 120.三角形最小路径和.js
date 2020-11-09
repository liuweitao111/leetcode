/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const len = triangle.length;
  if(len === 0) {
    return 0;
  }
  const dp = [triangle[0][0]];
  for(let i = 1; i < len; i++) {
    const len2 = triangle[i].length;
    dp[len2 - 1] = dp[len2 - 2] + triangle[i][len2 - 1];
    for(let j = len2 - 2; j > 0; j--) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
    }
    dp[0] += triangle[i][0];
  }
  return Math.min(...dp);
};
// var minimumTotal = function(triangle) {
//   const len = triangle.length;
//   if(len === 0) {
//     return 0;
//   }
//   const dp = [...triangle[len - 1]];
//   for(let i = len - 2; i >= 0; i--) {
//     for(let j = 0; j < triangle[i].length; j++) {
//       dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
//     }
//   }
//   return dp[0];
// };
// @lc code=end

