/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if(!text1 || !text2) {
    return 0;
  }
  const dp = Array.from({length: text1.length + 1}).map(() => [0]);
  dp[0] = Array(text2.length + 1).fill(0);
  for(let i = 0; i < text1.length; i++) {
    for(let j = 0; j < text2.length; j++) {
      if(text1[i] === text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[text1.length][text2.length];
};
// @lc code=end

