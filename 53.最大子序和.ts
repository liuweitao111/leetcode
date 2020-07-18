/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */
// 以i为结尾的所有子数组中，和最大的是多少？
// @lc code=start
function maxSubArray(nums: number[]): number {
  const dp: number[] = [];
  dp[0] = nums[0];
  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i];
  }
  return Math.max(...dp);
};
// @lc code=end

