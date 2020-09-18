/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(!nums.length) {
    return;
  }
  let l = 0;
  let r = nums.length - 1;
  if(nums[l] < nums[r]) {
    return nums[l];
  }
  let min = nums[0];
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(min > nums[m]) {
      min = nums[m];
    }
    if(nums[m] === nums[l]) {
      l++;
    } else if(nums[m] > nums[l]) {
      if(nums[0] > nums[l]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      r = m - 1;
    }
  }
  return min;
};
// @lc code=end

