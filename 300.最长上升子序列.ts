/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长上升子序列
 */
// 递推方程
// dp[i] = Math.max(dp[j], ..., dp[k]) nums[j] < nums[i] nums[k] < nums[i]
// @lc code=start
function lengthOfLIS(nums: number[]): number {
  if(!nums.length) {
    return 0;
  }
  const dp: number[] = [];
  dp[0] = 1;
  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(...dp.filter((v, k) => nums[k] < nums[i]), 0) + 1;
  }
  return Math.max(...dp);
};
// @lc code=end

