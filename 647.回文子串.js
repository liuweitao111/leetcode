/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const n = s.length;
  const dp = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for(let j = i; j < n; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if(s[i] !== s[j]) {
        dp[i][j] = 0;
      } else if(i + 1 === j) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i + 1][j - 1];
      }
    }
  }
  return dp.reduce((res, item) => res + item.filter(i => i).length, 0);
};
// @lc code=end
