/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(!nums.length) {
    return 0;
  }
  let ele = nums[0];
  let eleCount = 1;
  for(let i = 1; i < nums.length; i++) {
    if(ele === nums[i]) {
      eleCount++;
    } else {
      eleCount--;
    }
    if(eleCount === 0) {
      ele = nums[i];
      eleCount = 1;
    }
  }
  return ele;
};
// @lc code=end

