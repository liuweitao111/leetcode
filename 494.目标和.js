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
// var findTargetSumWays = function(nums, S) {
//   let result = 0;
//   const dfs = (i, sum) => {
//     if(i === nums.length && S === sum) {
//       result++;
//     } else if(i < nums.length) {
//       dfs(i + 1, sum + nums[i]);
//       dfs(i + 1, sum - nums[i]);
//     }
//   }
//   dfs(0, 0);
//   return result;
// };
// 将加分到A组，将减分到B组 
// sum(A) - sum(B) = S => 2sum(A) = S + sum(A) + sum(B) sum(A) = (S + sum(nums)) / 2
var findTargetSumWays = function(nums, S) {
  const sum = nums.reduce((total, num) => total + num, 0);
  if(sum < Math.abs(S)) {
    return 0;
  }
  const target = (sum + S) / 2;
  if(target - parseInt(target, 10) !== 0) {
    return 0;
  }
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for(let i = 0; i < nums.length; i++) {
    for(let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
};
// @lc code=end

