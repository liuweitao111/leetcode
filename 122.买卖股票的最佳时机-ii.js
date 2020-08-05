/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let saleTime = -1;
  for(let i = 0; i < prices.length - 1; i++) {
    // 买入
    if(saleTime === -1 && prices[i] < prices[i + 1]) {
      saleTime = i;
    } else if(saleTime > -1 && prices[i] > prices[i + 1]) { // 卖出
      profit += prices[i] - prices[saleTime];
      saleTime = -1;
    }
  }
  if(saleTime > -1) {
    profit += prices[prices.length - 1] - prices[saleTime];
  }
  return profit;
};
// @lc code=end

