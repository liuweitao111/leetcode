/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let res = [0];
  let h = 1;
  for(let i = 1; i <= n; i++) {
    res = [...res, ...res.reverse().map(r => h + r)];
    h = h << 1;
  }
  return res;
};
// @lc code=end

