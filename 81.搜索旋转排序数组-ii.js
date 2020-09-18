/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */
/**
 * [5,6,1,2,3] m < l 右边有序 m < target < r l = m + 1;
 * [5,6,7,1,2] m > l 左边有序 l < target < m r = m - 1;
 * [1,5,1,1,1] m = l l++
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const len = nums.length;
  if(!len) {
    return false;
  }
  let l = 0;
  let r = len - 1;
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(nums[m] === target) {
      return true;
    }
    if(nums[m] === nums[l]) {
      l++;
    } else if(nums[m] < nums[l]) {
      if(nums[m] < target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if(nums[l] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return false;
};
// @lc code=end

