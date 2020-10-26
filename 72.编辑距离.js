/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = Array.from({length: word1.length + 1}).map((v, i) => [i]);
  dp[0] = Array.from({length: word2.length + 1}).map((v, i) => i);

  for(let i = 1; i <= word1.length; i++) {
    for(let j = 1; j <= word2.length; j++) {
      if(word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};
// @lc code=end

