/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const count = str => {
    let count0 = 0, count1 = 0;
    for(const s of str) {
      if(s === '0') {
        count0++;
      } else {
        count1++;
      }
    }
    return [count0, count1];
  }
  const dp = [];
  for(let i = 0; i <= m; i++) {
    dp[i] = [];
    for(let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  for(const str of strs) {
    const [count0, count1] = count(str);
    for(let i = m; i >= count0; i--) {
      for(let j = n; j >= count1; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - count0][j - count1] + 1);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

