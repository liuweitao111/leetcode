/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if(!prices.length) {
    return 0;
  }
  if(k > prices.length / 2) {
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
      if(prices[i] < prices[i + 1]) {
        profit += prices[i + 1] - prices[i];
      }
    }
    return profit;
  }
  // 记录持有状态
  const buyIn = Array(k + 1).fill(-prices[0]);
  buyIn[0] = 0;
  // 记录空状态
  const buyOut = Array(k + 1).fill(0);
  for(let i = 1; i < prices.length; i++) {
    for(let j = k; j > 0; j--) {
      buyOut[j] = Math.max(buyOut[j], buyIn[j] + prices[i]);
      buyIn[j] = Math.max(buyIn[j], buyOut[j - 1] - prices[i]);
    }
  }
  return buyOut[k];
};
// @lc code=end
