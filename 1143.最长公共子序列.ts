/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  if(!text1 || !text2) {
    return 0;
  }
  const dp: number[][] = Array.from({length: text1.length + 1}).map(v => [0]);
  dp[0] = Array(text2.length + 1).fill(0);
  for(let i = 1; i < text1.length + 1; i++) {
    for(let j = 1; j < text2.length + 1; j++) {
      if(text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};
// @lc code=end

