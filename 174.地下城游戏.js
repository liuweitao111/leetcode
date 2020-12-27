/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const n = dungeon.length;
  if(n === 0) {
    return 1;
  }
  const m = dungeon[0].length;
  const dp = Array.from({ length: n + 1 }).map(() => Array(m + 1).fill(Infinity));
  dp[n][m - 1] = 1;
  dp[n - 1][m] = 1;
  for(let i = n - 1; i >= 0; i--) {
    for(let j = m - 1; j >= 0; j--) {
      dp[i][j] = Math.max(Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j], 1);
    }
  }
  return dp[0][0];
};
// @lc code=end