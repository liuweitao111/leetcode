/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let sum = 0;
  for(let i = 0; i < s.length - 1; i++) {
    const symbol = map[s[i]] < map[s[i + 1]] ? -1 : 1;
    sum += symbol * map[s[i]];
  }
  sum += map[s[s.length - 1]];
  return sum;
};
// @lc code=end

