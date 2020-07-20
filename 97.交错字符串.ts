/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  if(s1.length + s2.length !== s3.length) {
    return false;
  }
  const dp: boolean[][] = [];
  dp[0] = [true];
  for(let i = 1; i < s1.length + 1; i++) {
    if(s1[i - 1] === s3[i - 1]) {
      dp[i] = [dp[i - 1][0]];
    } else {
      dp[i] = [false];
    }
  }
  for(let i = 1; i < s2.length + 1; i++) {
    if(s2[i - 1] === s3[i - 1]) {
      dp[0][i] = dp[0][i -1];
    } else {
      dp[0][i] = false;
    }
  }
  for(let i = 1; i < s1.length + 1; i++) {
    for(let j = 1; j < s2.length + 1; j++) {
      let tmp1 = false;
      let tmp2 = false;
      if(s1[i - 1] === s3[i + j - 1]) {
        tmp1 = dp[i - 1][j];
      } 
      if(s2[j - 1] === s3[i + j - 1]) {
        tmp2 = dp[i][j - 1];
      } 
      dp[i][j] = tmp1 || tmp2;
    }
  }
  return dp[s1.length][s2.length];
};
// @lc code=end

