/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const l = Array(nums.length).fill(1);
  const r = Array(nums.length).fill(1);
  for(let i = 1; i < nums.length; i++) {
    l[i] = l[i - 1] * nums[i - 1];
  }
  for(let i = nums.length - 2; i >= 0; i--) {
    r[i] = r[i + 1] * nums[i + 1];
  }
  const res = [];
  for(let i = 0; i < nums.length; i++) {
    res[i] = r[i] * l[i];
  }

  return res;
};
// @lc code=end

