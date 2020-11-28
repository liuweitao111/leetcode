/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   const helper = (n, prev1, prev2) => {
//     if(n === 0) {
//       return prev1;
//     }
//     return helper(n - 1, prev2, prev2 + prev1);
//   }
//   return helper(n , 1, 1);
// };
var climbStairs = function(n) {
  let dp0 = 1;
  let dp1 = 1;
  for(let i = 2; i <= n; i++) {
    const dp2 = dp0 + dp1;
    dp0 = dp1;
    dp1 = dp2;
  }
  return dp1;
};
// @lc code=end

