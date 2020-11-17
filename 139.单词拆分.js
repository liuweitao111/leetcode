/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = [true];
  for(let i = 1; i <= s.length; i++) {
    for(const word of wordDict) {
      const len = word.length;
      const prev = i - len;
      if(s[i - 1] === word[len - 1] && prev >= 0 && dp[prev] && word === s.slice(prev, i)) {
        dp[i] = true;
        break;
      }
    }
  }
  return !!dp[s.length];
}
// function match(s, i, word){
//   for(let j = word.length - 1; j >= 0; j--) {
//     if(i < 0) {
//       return false;
//     }
//     if(s[i] !== word[j]) {
//       return false;
//     }
//     i--;
//   }
//   return true;
// }
// var wordBreak = function(s, wordDict) {
//   const dp = [true];
//   const n = s.length;
//   const m = wordDict.length;
//   for(let i = 0; i < n; i++) {
//     dp[i + 1] = false;
//     for(let j = 0; j < m; j++) {
//       if(match(s, i, wordDict[j]) && dp[i - wordDict[j].length + 1]) {
//         dp[i + 1] = true;
//         break;
//       }
//     }
//   }
//   return dp[n];
// };
// @lc code=end

