/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length <= 1) {
    return 0;
  }
  let max_distance = nums[0];
  let step = 1;
  let i = 1;
  while(nums.length - 1 > max_distance) {
    let new_max = max_distance;
    while(i <= max_distance) {
      new_max = Math.max(new_max, i + nums[i]);
      i++;
    }
    step++;
    max_distance = new_max;
  }
  return step;
};
// @lc code=end

