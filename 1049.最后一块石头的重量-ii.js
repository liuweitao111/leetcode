/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const sum = stones.reduce((sum, stone) => sum + stone, 0);
  const target = Math.ceil(sum / 2);
  const dp = Array(target + 1).fill(0);
  for(stone of stones) {
    for(let i = target; i >= stone; i--) {
      dp[i] = Math.max(dp[i], dp[i - stone] + stone);
    }
  }
  return Math.abs(sum - 2 * dp[target]);
};
// @lc code=end

