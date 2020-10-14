/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let prevDp0, prevDp1;
  let dp0 = 0;
  let dp1 = -prices[0];
  for(let i = 1; i < prices.length; i++) {
    prevDp0 = dp0;
    prevDp1 = dp1;
    dp0 = Math.max(prevDp0, prevDp1 + prices[i] - fee);
    dp1 = Math.max(prevDp1, prevDp0 - prices[i]);
  }
  return dp0;
};
// @lc code=end

