/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let p0 = 0; // 记录0的右边界
  let p1 = nums.length - 1; // 记录2的左边界
  let curr = 0;
  while(curr <= p1) {
    if(nums[curr] === 0) {
      [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
      p0++;
      curr++;
    } else if(nums[curr] === 1) {
      curr++;
    } else {
      [nums[curr], nums[p1]] = [nums[p1], nums[curr]];
      p1--;
    }
  }
};
// @lc code=end

