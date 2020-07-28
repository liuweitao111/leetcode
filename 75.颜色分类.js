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
  for(let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    const tmp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = tmp;
  }
};
// @lc code=end

