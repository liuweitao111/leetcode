/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows <= 1) {
    return s;
  }
  let newS = '';
  for(let j = 0; j < numRows; j++) {
    let i = 0;
    while(i < s.length) {
      if(i + j < s.length) {
        newS += s[i + j];
      }
      i += 2 * (numRows - 1);
      if(j !== 0 && j !== numRows - 1 && i - j < s.length) {
        newS += s[i - j];
      }
    }
  }
  return newS;
};
// @lc code=end

