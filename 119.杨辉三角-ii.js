/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const res = [];
  res[0] = 1;
  res[rowIndex] = 1;
  // 左右对称
  let i = 1;
  while(rowIndex >= i << 1) {
    res[i] = res[i - 1] * (rowIndex - i + 1) / i;
    res[rowIndex - i] = res[i];
    i++;
  }
  return res;
};
// @lc code=end

