/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  if(!len) {
    return 0;
  }
  let dp1 = -prices[0]; // 持有
  let dp2 = 0; // 没有持有，处于冷冻期
  let dp3 = 0; // 没有持有，未处于冷冻期
  for(let i = 1; i < len; i++) {
    const dp1_t = dp1;
    const dp2_t = dp2;
    const dp3_t = dp3;
    dp1 = Math.max(dp1_t, dp3_t - prices[i]);
    dp2 = dp1_t + prices[i];
    dp3 = Math.max(dp2_t, dp3_t);
  }
  return Math.max(dp2, dp3);
};
// @lc code=end

