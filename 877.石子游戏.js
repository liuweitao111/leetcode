/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  const dp = [ ...piles ];
  const len = piles.length;
  for(let i = len - 2; i >= 0; i--) {
    for(let j = i + 1; j < len; j++) {
      dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
    }
  }
  return dp[len - 1] > 0;
 };
// @lc code=end

