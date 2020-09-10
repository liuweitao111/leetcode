/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  if(!len) {
    return [];
  }
  let h1 = -prices[0];
  let h2 = -prices[0];
  let e1 = 0;
  let e2 = 0;
  for(let i = 1; i < len; i++) {
    const tmp = e1;
    e1 = Math.max(h1 + prices[i], e1);
    e2 = Math.max(h2 + prices[i], e2);
    h1 = Math.max(h1, -prices[i]);
    h2 = Math.max(h2, tmp - prices[i]);
  }
  return e2;
};
// @lc code=end

