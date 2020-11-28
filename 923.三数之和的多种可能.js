/*
 * @lc app=leetcode.cn id=923 lang=javascript
 *
 * [923] 三数之和的多种可能
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  // const dp = [];
  // for(let i = 0; i < A.length; i++) {
  //   dp[i] = Array.from({length: target + 1}).map(() => Array(3).fill(0));
  //   dp[i][0] = Array(3).fill(1);
  // }
  // for(let i = 1; i < A.length; i++) {
  //   for(let j = A[i]; j <= target; j++) {
  //     for(let k = 1; k < 3; k++) {
  //       dp[i][j][k] = dp[i - 1][j][k] + dp[i][j - A[i]][k - 1];
  //     }
  //   }
  // }
  // console.log(dp);
  // return dp[A.length - 1][target][2];
};
// @lc code=end

