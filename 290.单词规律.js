/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sArr = s.split(' ');
  if(pattern.length !== sArr.length) {
    return false;
  }
  const map = {};
  for(let i = 0; i < pattern.length; i++) {
    if(!map[pattern[i]]) {
      if(Object.values(map).includes(sArr[i])) {
        return false;
      }
      map[pattern[i]] = sArr[i];
    } else if(map[pattern[i]] !== sArr[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

