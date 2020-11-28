/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  for(let i = 0; i < nums.length; i++) {
    while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
};
// @lc code=end

