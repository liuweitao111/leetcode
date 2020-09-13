/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const n = s.length;
  const m = t.length;
  if(!n || !m || n < m) {
    return 0;
  }
  let matchIdx = -1;
  const dp = Array(n + 1).fill(1);
  for(let i = 0; i < m; i++) {
    const tmp = [...dp];
    let isMatch = false;
    for(let j = matchIdx + 1; j < n; j++) {
      if(isMatch) {
        dp[j + 1] = t[i] !== s[j] ? dp[j] : tmp[j] + dp[j];
      } else if(t[i] === s[j]){
        isMatch = true;
        matchIdx = j;
        dp[j + 1] = tmp[j];
      } else {
        dp[j + 1] = 0;
      }
    }
    if(!isMatch) {
      return 0;
    }
  }
  return dp[n];
};
// @lc code=end

