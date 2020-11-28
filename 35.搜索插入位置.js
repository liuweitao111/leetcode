/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m = 0;
  while(l <= r) {
    m = Math.floor((l + r) / 2);
    if(nums[m] === target) {
      return m;
    } else if(nums[m] > target) {
      r = m - 1;
    } else {
      m += 1;
      l = m;
    }
  }
  return m;
};
// @lc code=end

