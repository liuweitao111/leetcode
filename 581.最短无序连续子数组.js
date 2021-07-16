/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let flag = false;
  let min = Infinity, max = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      flag = true;
    }
    if (flag) {
      min = Math.min(min, nums[i]);
    }
  }

  flag = false;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      flag = true;
    }
    if (flag) {
      max = Math.max(max, nums[i]);
    }
  }
  let l = 0, r = nums.length - 1;
  while (l < nums.length) {
    if (min < nums[l]) {
      break;
    }
    l++;
  }

  while (r >= 0) {
    if (max > nums[r]) {
      break;
    }
    r--;
  }

  return r - l < 0 ? 0 : r - l + 1;
};
// @lc code=end