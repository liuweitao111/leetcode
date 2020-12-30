/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let i = 0;
  let idx = 0;
  let start = 0;
  let tmp = nums[idx];
  while(i < nums.length) {
    idx = start;
    tmp = nums[idx]
    do {
      const newIdx = (idx + k) % nums.length;
      [tmp, nums[newIdx]] = [nums[newIdx], tmp];
      idx = newIdx;
      i++;
    } while(start !== idx);
    start++;
  }
};
// @lc code=end

