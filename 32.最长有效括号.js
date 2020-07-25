/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//   const getKey = (i, j) => `${i}_${j}`;
//   const dp = {};
//   let maxLen = 0;
//   for (let l = 0; l < s.length; l++) {
//     for (let i = 0; i + l < s.length; i++) {
//       const j = l + i;
//       if (l % 2 === 0) {
//         dp[getKey(i, j)] = false;
//       } else if (l === 1) {
//         dp[getKey(i, j)] = !!(s[i] === "(" && s[j] === ")");
//       } else {
//         dp[getKey(i, j)] = dp[getKey(i + 1, j - 1)] && s[i] === "(" && s[j] === ")";
//         for(let k = i + 1; k <= j - 1; k += 2) {
//           if(dp[getKey(i, j)]) {
//             break;
//           }
//           dp[getKey(i, j)] = dp[getKey(i, k)] && dp[getKey(k + 1, j)]
//         }
//       }
//       // if(dp[getKey(i, j)]) {
//       //   console.log(i, j);
//       // }
//       if(dp[getKey(i, j)] && l + 1 > maxLen) {
//         maxLen = l + 1;
//       }
//     }
//   }
//   return maxLen;
// };
// dp[i] 表示以下标i字符结尾的最长有效括号的长度
var longestValidParentheses = function (s) {
  const dp = [0];
  dp[1] = s[0] === '(' && s[1] === ')' ? 2 : 0;
  for(let i = 2; i < s.length; i++) {
    if(s[i] === '(') {
      dp[i] = 0;
    } else if(s[i - 1] === '('){
      dp[i] = dp[i - 2] + 2;
    } else if(s[i - dp[i - 1] - 1] === '('){
      dp[i] = dp[i - 1] + 2;
      if(i - dp[i - 1] - 2 >= 0) {
        dp[i] += dp[i - dp[i - 1] - 2];
      }
    } else {
      dp[i] = 0;
    }
  }
  return Math.max(...dp);
};
// @lc code=end
