/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return '';
  }
  const minLen = Math.min(...strs.map(str => str.length));
  let prefix = '';
  let i = 0;
  while(i < minLen) {
    const char = strs[0][i];
    for(let j = 1; j < strs.length; j++) {
      if(char !== strs[j][i]) {
        return prefix;
      }
    }
    i++;
    prefix += char;
  }
  return prefix;
};
// @lc code=end

