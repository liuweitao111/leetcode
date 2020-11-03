/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 递归 + 备忘录
// const map = {};
// var fib = function(N) {
//   if(N < 2) {
//     return N;
//   }
//   if(map[N]) {
//     return map[N];
//   }
//   map[N] = fib(N - 1) + fib(N - 2);
//   return map[N];
// };

// 尾递归
// var fib = function(N) {
//   return helper(N, 0, 1);
// };
// function helper(n, prev, curr) {
//   if(n === 0) {
//     return prev;
//   }
//   return helper(n - 1, curr, curr + prev);
// }

// 动态规划
var fib = function(N) {
  const dp = [0, 1];
  for(let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
};
// @lc code=end

