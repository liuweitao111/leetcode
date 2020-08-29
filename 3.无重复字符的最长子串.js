/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let r = 0;
  let maxLen = 0;
  const charMap = {};
  while(r < s.length) {
    charMap[s[r]] = charMap[s[r]] ? charMap[s[r]] + 1 : 1;
    if(charMap[s[r]] === 2) {
      while(s[l] !== s[r]) {
        charMap[s[l]]--;
        l++;
      }
      charMap[s[r]]--;
      l++;
    }
    if(maxLen < r - l + 1) {
      maxLen = r - l + 1;
    }
    r++;
  }
  return maxLen;
};
// @lc code=end

