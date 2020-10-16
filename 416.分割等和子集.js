/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const target = nums.reduce((total, num) => total + num, 0) / 2;
  if(target - parseInt(target, 10) !== 0) {
    return false;
  }
  const dp = [true];
  for(let i = 0; i < nums.length; i++) {
    for(let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return !!dp[target];
};
// @lc code=end

