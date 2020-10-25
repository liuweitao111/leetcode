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
// var coinChange = function(coins, amount) {
//   if(amount === 0) {
//     return 0;
//   }
//   const dp = [];
//   for(c of coins) {
//     dp[c] = 1;
//   }
//   for(let i = 1; i <= amount; i++) {
//     let min = Infinity;
//     for(c of coins) {
//       if(i - c > 0 && dp[i - c] && min > dp[i - c]) {
//         min = dp[i - c];
//       }
//     }
//     if(isFinite(min) && (!dp[i] || dp[i] > min + 1)) {
//       dp[i] = min + 1;
//     }
//   }
//   return dp[amount] || -1;
// };
var coinChange = function(coins, amount) {
  const len = amount + 1;
  const dp = Array(len).fill(len);
  dp[0] = 0;
  for(let i = 1; i < len; i++) {
    for(const coin of coins) {
      if(i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
// @lc code=end

