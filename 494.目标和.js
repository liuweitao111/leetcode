/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let result = 0;
  const dfs = (i, sum) => {
    if(i === nums.length && S === sum) {
      result++;
    } else if(i < nums.length) {
      dfs(i + 1, sum + nums[i]);
      dfs(i + 1, sum - nums[i]);
    }
  }
  dfs(0, 0);
  return result;
};
// @lc code=end

