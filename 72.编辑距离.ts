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
  let flag = true;
  dp[0] = [1];
  if(word1[0] === word2[0]) {
    dp[0][0] = 0;
    flag = false;
  }
  for(let i = 1; i < word1.length; i++) {
    if(flag && word1[i] === word2[0]) {
      dp[i] =[dp[i - 1][0]];
      flag = false;
    } else {
      dp[i] = [dp[i - 1][0] + 1];
    }
  }
  flag = !!dp[0][0];
  for(let i = 1; i < word2.length; i++) {
    if(flag && word2[i] === word1[0]) {
      dp[0][i] = dp[0][i - 1];
      flag = false;
    } else {
      dp[0][i] = dp[0][i - 1] + 1;
    }
  }
  for(let i = 1; i < word1.length; i++) {
    for(let j = 1; j < word2.length; j++) {
      if(word1[i] === word2[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j -1]) + 1;
      }
    }
  }
  return dp[word1.length - 1][word2.length - 1];
};
// @lc code=end

