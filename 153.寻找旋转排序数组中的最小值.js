/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  if(len === 1) {
    return nums[0];
  }
  let l = 0;
  let r = len - 1;
  if(nums[r] > nums[l]) {
    return nums[l];
  }
  let min = nums[0];
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(min > nums[m]) {
      min = nums[m];
    }
    if(nums[m] >= nums[0]) {
      l = m + 1;
    } else if(nums[m] <= nums[len - 1]) {
      r = m - 1;
    }
  }
  return min;
};
// @lc code=end

