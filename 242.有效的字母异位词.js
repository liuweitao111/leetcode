/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = {};
  for(const w of s) {
    if(!map[w]) {
      map[w] = 1;
    } else {
      map[w]++;
    }
  }
  for(const w of t) {
    if(!map[w]) {
      return false;
    }
    map[w]--;
  }
  return Object.keys(map).every(key => map[key] === 0);
};
// @lc code=end

