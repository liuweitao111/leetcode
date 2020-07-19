/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if(nums.length === 0) {
    return 0;
  }
  if(nums.length === 1) {
    return nums[0];
  }
  const dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for(let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(Math.max(...dp.slice(0, i - 1)) + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
// @lc code=end

