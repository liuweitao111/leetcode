/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
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

function isValid(s, wordDict) {
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
}
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  if(!isValid(s, wordDict)) {
    return [];
  }
  const dp = [];
  dp[0] = [''];
  const n = s.length;
  const m = wordDict.length;
  for (let i = 0; i < n; i++) {
    dp[i + 1] = [];
    for (let j = 0; j < m; j++) {
      if (match(s, i, wordDict[j])) {
        for(it of dp[i - wordDict[j].length + 1]) {
          dp[i + 1].push(`${it} ${wordDict[j]}`);
        }
      }
    }
  }
  return dp[n].map(it => it.slice(1));
};
// @lc code=end
