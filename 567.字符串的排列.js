/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // 初始化Map
  const s1CharMap = {};
  for(let i = 0; i < 26; i++) {
    s1CharMap[String.fromCharCode(97 + i)] = 0;
  }
  for(let i = 0; i < s1.length; i++) {
    s1CharMap[s1[i]]++;
  }
  let l = 0;
  let r = 0;
  while(r < s2.length) {
    s1CharMap[s2[r]]--;
    if(s1CharMap[s2[r]] === -1) {
      // 还原s1CharMap
      while(s1CharMap[s2[r]] !== 0) {
        s1CharMap[s2[l]]++;
        l++;
      }
    } else if(r - l + 1 === s1.length) {
      return true;
    }
    r++;
  }
  return false;
};
// @lc code=end

