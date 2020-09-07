/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(!nums.length) {
    return 0;
  }
  const max = [nums[0]];
  const min = [nums[0]];
  for(let i = 1; i < nums.length; i++) {
    const maxVal = nums[i] >= 0 ? max[i - 1] * nums[i] : min[i - 1] * nums[i];
    max[i] = Math.max(maxVal, nums[i]);
    const minVal = nums[i] <= 0 ? max[i - 1] * nums[i] : min[i - 1] * nums[i];
    min[i] = Math.min(minVal, nums[i]);
  }
  return Math.max(...max);
};
// @lc code=end

