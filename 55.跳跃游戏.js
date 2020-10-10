/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max_distance = nums[0];
  for(let i = 0; i < nums.length; i++) {
    if(i <= max_distance) {
      max_distance = Math.max(max_distance, i + nums[i]);
    } else {
      break;
    }
  }
  return max_distance >= nums.length - 1;
};
// @lc code=end

