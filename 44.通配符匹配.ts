/*
 * @lc app=leetcode.cn id=44 lang=typescript
 *
 * [44] 通配符匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const dp: boolean[][] = [];
  dp[0] = [true];
  for(let i = 1; i < s.length + 1; i++) {
    dp[i] = [false]
  }
  for(let i = 1; i < p.length + 1; i++) {
    if(p[i - 1] === '*') {
      dp[0][i] = dp[0][i - 1];
    } else {
      dp[0][i] = false;
    }
  }
  for(let i = 1; i < s.length + 1; i++) {
    for(let j = 1; j < p.length + 1; j++) {
      if(s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if(p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i - 1][j -1];
      } else {
        dp[i][j] = false;
      }
    }
  }
  return dp[s.length][p.length];
};
// @lc code=end

