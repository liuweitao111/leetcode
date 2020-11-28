/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  const len = nums.length;
  if(len === 0) {
    return undefined;
  }
  if(len === 1) {
    return 0;
  }
  let l = 1;
  let r = len - 2;
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
      return m;
    } 
    if(nums[m - 1] < nums[m] && nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  if(nums[0] > nums[1]) {
    return 0;
  }
  return len - 1;
};
// @lc code=end

