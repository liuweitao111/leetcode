/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let minLen = Infinity;
  let resL = 0;
  const charMap = {};
  let charType = 0;
  for(const c of t) {
    if(!charMap[c]) {
      charMap[c] = 1;
      charType++;
    }else {
      charMap[c]++;
    }
  }
  let l = 0;
  let r = 0;
  while(r < s.length) {
    if(charMap[s[r]] !== undefined) {
      charMap[s[r]]--;
      if(charMap[s[r]] === 0) {
        charType--;
      }
    }
    while(charType === 0) {
      if(r - l + 1 < minLen) {
        minLen = r - l + 1;
        resL = l;
      }
      if(charMap[s[l]] !== undefined) {
        charMap[s[l]]++;
        if(charMap[s[l]] === 1) {
          charType++;
        }
      }
      l++;
    }
    r++;
  }
  if(minLen > s.length) {
    return "";
  }
  return s.substring(resL, resL + minLen);
};
// @lc code=end

