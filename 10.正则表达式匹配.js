/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const isSame = (s1, s2) => s1 === s2 || s2 === '.';
  const dp = Array.from({length: s.length + 1}).map(v => [false]);
  dp[0][0] = true;
  for(let i = 0; i < s.length + 1; i++) {
    for(let j = 1; j < p.length + 1; j++) {
      if(i === 0) {
        dp[i][j] = p[j - 1] === '*' ? dp[i][j - 2] : false;
        continue;
      }

      if(p[j - 1] === '*') {
        dp[i][j] = ((dp[i - 1][j - 1] || dp[i - 1][j]) && isSame(s[i - 1], p[j - 2])) || dp[i][j - 2];
      } else {
        dp[i][j] = dp[i - 1][j - 1] && isSame(s[i - 1], p[j - 1]);
      }
    }
  }
  return dp[s.length][p.length];
};
// @lc code=end

