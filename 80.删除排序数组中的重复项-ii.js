/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let j = 0;
  for(let k = 1; k < nums.length + 1; k++) {
    if(nums[j] !== nums[k]) {
      let step = Math.min(k - j, 2);
      while(step-- > 0) {
        nums[i++] = nums[j];
      }
      j = k;
    }
  }
  nums.length = i;
  return i;
};
// @lc code=end

