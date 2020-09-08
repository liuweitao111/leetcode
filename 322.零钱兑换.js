/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(amount === 0) {
    return 0;
  }
  const dp = [];
  for(c of coins) {
    dp[c] = 1;
  }
  for(let i = 1; i <= amount; i++) {
    let min = Infinity;
    for(c of coins) {
      if(i - c > 0 && dp[i - c] && min > dp[i - c]) {
        min = dp[i - c];
      }
    }
    if(isFinite(min) && (!dp[i] || dp[i] > min + 1)) {
      dp[i] = min + 1;
    }
  }
  return dp[amount] || -1;
};
// @lc code=end

