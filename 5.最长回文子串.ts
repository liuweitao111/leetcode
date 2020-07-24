/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const dp: boolean[][] = Array.from(s).map(v => []);
  let sub: string = '';
  for(let l:number = 0; l < s.length; l++) {
    for(let i:number = 0;  i + l < s.length; i++) {
      const j = i + l;
      if(l === 0) {
        dp[i][j] = true;
      } else if(l === 1) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }
      if(dp[i][j] && l + 1 > sub.length) {
        sub = s.slice(i, j + 1);
      }
    }
  }
  return sub;
};
// @lc code=end

