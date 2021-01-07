/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let n = x ^ y;
  let c = 0;
  while(n) {
    n &= (n - 1);
    c++;
  }
  return c;
};
// @lc code=end

