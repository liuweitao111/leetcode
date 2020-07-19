/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if(!s) {
    return 0;
  }
  const dp:string[] = [];
  dp[0] = s[0];
  for(let i = 1; i < s.length; i++) {
    const idx = dp[i - 1].indexOf(s[i]);
    if(idx === -1) {
      dp[i] = dp[i - 1] + s[i];
    } else {
      dp[i] = dp[i - 1].slice(idx + 1) + s[i];
    }
  }
  return Math.max(...dp.map(d => d.length));
};
// @lc code=end

