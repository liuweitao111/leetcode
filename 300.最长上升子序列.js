/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(!nums.length) {
    return 0;
  }
  const dp = [];
  for(let i = 0; i < nums.length; i++) {
    let max = 0;
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j] && max < dp[j]) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};
// @lc code=end

