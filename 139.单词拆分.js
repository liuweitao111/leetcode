/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
function match(s, i, word){
  for(let j = word.length - 1; j >= 0; j--) {
    if(i < 0) {
      return false;
    }
    if(s[i] !== word[j]) {
      return false;
    }
    i--;
  }
  return true;
}
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = [true];
  const n = s.length;
  const m = wordDict.length;
  for(let i = 0; i < n; i++) {
    dp[i + 1] = false;
    for(let j = 0; j < m; j++) {
      if(match(s, i, wordDict[j]) && dp[i - wordDict[j].length + 1]) {
        dp[i + 1] = true;
        break;
      }
    }
  }
  return dp[n];
};
// @lc code=end

