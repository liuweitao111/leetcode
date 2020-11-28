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
// 动态规划
// 思路：看最后一跳
// 状态：f[i] 表示是否能从0跳到i
// 推导：f[i] = OR(f[j],j<i&&j能跳到i) 判断之前所有的点最后一跳是否能跳到当前点
// 初始化：f[0] = true
// 结果： f[n-1]
var canJump = function(nums) {
  const dp = [true];
  for(let i = 1; i < nums.length; i++) {
    dp[i] = false;
    for(let j = i - 1; j >= 0; j--) {
      if(dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[nums.length - 1];
}
// 贪心
// var canJump = function(nums) {
//   let max_distance = nums[0];
//   for(let i = 0; i < nums.length; i++) {
//     if(i <= max_distance) {
//       max_distance = Math.max(max_distance, i + nums[i]);
//     } else {
//       break;
//     }
//   }
//   return max_distance >= nums.length - 1;
// };
// @lc code=end

