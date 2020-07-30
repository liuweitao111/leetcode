/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  for(let k = 0; k < nums.length; k++) {
    if(nums[k] !== 0) {
      let tmp = nums[i];
      nums[i] = nums[k];
      nums[k] = tmp;
      i++;
    } 
  }
};
// @lc code=end

