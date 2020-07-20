/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  if(!word1) {
    return word2.length;
  }
  if(!word2) {
    return word1.length;
  }
  const dp: number[][] = [];
  for(let i = 0; i < word1.length + 1; i++) {
    dp[i] = [i]
  }
  for(let i = 0; i < word2.length + 1; i++) {
    dp[0][i] = i;
  }
  for(let i = 1; i < word1.length + 1; i++) {
    for(let j = 1; j < word2.length + 1; j++) {
      if(word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j -1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};
// @lc code=end

