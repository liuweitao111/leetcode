/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if(len === 0) {
    return 0;
  }
  if(len <= 2) {
    return Math.max(...nums);
  }
  const dp1 = [nums[0], nums[0]]; 
  const dp2 = [0, nums[1]];
  for(let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
  }
  return Math.max(dp1[len - 2], dp2[len - 2], dp2[len - 3] + nums[len - 1]);
};
// @lc code=end

