/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const dp = [];
var numTrees = function(n) {
  if(n < 2) {
    return 1;
  }
  if(dp[n]) {
    return dp[n];
  }
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += numTrees(i - 1) * numTrees(n - i);
  }
  dp[n] = sum;
  return sum;
};
// @lc code=end

