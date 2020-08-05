/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const majority = [{}, {}];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === majority[0].value) {
      majority[0].count++;
    } else if(nums[i] === majority[1].value) {
      majority[1].count++;
    } else {
      if(!majority[0].count) {
        majority[0] = { value: nums[i], count: 1};
      } else if(!majority[1].count) {
        majority[1] = { value: nums[i], count: 1};
      } else {
        majority[0].count--;
        majority[1].count--;
      }
    }
  }
  // 验证，重新统计
  majority[0].count = 0;
  majority[1].count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === majority[0].value) {
      majority[0].count++;
    } else if(nums[i] === majority[1].value) {
      majority[1].count++;
    }
  }
  return majority.filter(m => m.count > nums.length / 3).map(m => m.value);
};
// @lc code=end

