/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length;
  if(!len) {
    return -1;
  }
  if(target === nums[0]) {
    return 0;
  }
  let l = 0;
  let r = len - 1;
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(nums[m] === target) {
      return m;
    }
    if(target < nums[0]) {
      if(nums[m] < target || nums[m] > nums[len - 1]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if(nums[m] > target || nums[m] < nums[0]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return -1;
};
// @lc code=end

