/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for(let i = 1; i < target + 1; i++) {
    for(num of nums) {
      dp[i] += i - num >= 0 ? dp[i - num] : 0;
    }
  }
  return dp[target];
};
// @lc code=end

