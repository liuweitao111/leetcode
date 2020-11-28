/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const dp = [1];
  let count = 1;
  let i2 = i3 = i5 = 0;
  while(count < n) {
    const ugly = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
    if(ugly === dp[i2] * 2) {
      i2++;
    }
    if(ugly === dp[i3] * 3) {
      i3++;
    }
    if(ugly === dp[i5] * 5) {
      i5++;
    }
    dp.push(ugly);
    count++;
  }
  return dp.pop();
};
// @lc code=end

