/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let l1 = 0;
  let l2 = 1;
  while(l2 < nums.length) {
    if(nums[l1] < nums[l2]) {
      nums[++l1] = nums[l2];
    } 
    l2++;
  }
  nums.length = l1 + 1;
  return nums.length;
};
// @lc code=end

